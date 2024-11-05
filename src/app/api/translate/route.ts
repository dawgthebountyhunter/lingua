import { NextResponse } from 'next/server';
import { Translate } from '@google-cloud/translate/build/src/v2';

const translate = new Translate({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    credentials: {
        client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, '\n')
    }
});

export async function POST(request: Request) {
    try {
        const { text, targetLanguage } = await request.json();
        const [translation] = await translate.translate(text, targetLanguage);
        
        return NextResponse.json({ translation });
    } catch (error) {
        console.error('Translation error:', error);
        return NextResponse.json(
            { error: 'Translation failed' },
            { status: 500 }
        );
    }
} 