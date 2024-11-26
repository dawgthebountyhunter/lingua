import { NextResponse } from "next/server";
import { Translate } from "@google-cloud/translate/build/src/v2";

function formatPrivateKey(key: string | undefined) {
    if (!key) return undefined;

    try {
        // First, if the key is wrapped in quotes, parse it as JSON to handle escape sequences
        let formattedKey = key;
        if (key.startsWith('"') && key.endsWith('"')) {
            formattedKey = JSON.parse(key);
        }

        // At this point, we should have a string with \n characters
        // Verify we have the correct header and footer
        if (!formattedKey.includes("-----BEGIN PRIVATE KEY-----")) {
            throw new Error("Invalid private key format - missing header");
        }

        // Log the first and last few characters for debugging
        console.log("Key format check:", {
            starts: formattedKey.substring(0, 20),
            ends: formattedKey.substring(formattedKey.length - 20),
            containsDoubleSlash: formattedKey.includes("\\\\"),
            containsSingleSlash: formattedKey.includes("\\n"),
            containsNewline: formattedKey.includes("\n"),
        });

        return formattedKey;
    } catch (error) {
        console.error("Error formatting private key:", error);
        throw error;
    }
}

// Add some debug logging to see exactly what we're working with
console.log("Raw env var type:", typeof process.env.GOOGLE_CLOUD_PRIVATE_KEY);
console.log(
    "Raw env var length:",
    process.env.GOOGLE_CLOUD_PRIVATE_KEY?.length,
);

const privateKey = formatPrivateKey(process.env.GOOGLE_CLOUD_PRIVATE_KEY);

const translate = new Translate({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    credentials: {
        client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
        private_key: privateKey,
    },
});

export async function POST(request: Request) {
    try {
        const { text, targetLanguage } = await request.json();

        // Add credentials check before translation
        console.log("Credentials check:", {
            hasProjectId: !!process.env.GOOGLE_CLOUD_PROJECT_ID,
            hasClientEmail: !!process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
            hasPrivateKey: !!privateKey,
            projectIdLength: process.env.GOOGLE_CLOUD_PROJECT_ID?.length,
            clientEmailLength: process.env.GOOGLE_CLOUD_CLIENT_EMAIL?.length,
            privateKeyLength: privateKey?.length,
        });

        const [translation] = await translate.translate(text, targetLanguage);
        return NextResponse.json({ translation });
    } catch (error) {
        console.error("Translation error:", {
            message: error.message,
            stack: error.stack,
            response: error.response?.data,
        });
        return NextResponse.json(
            {
                error: "Translation failed",
                message: error.message,
                details: error.response?.data || "No additional details",
            },
            { status: 500 },
        );
    }
}
