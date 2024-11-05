import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log('Calling Claude API with endpoint:', process.env.CLAUDE_API_ENDPOINT);
      console.log('Request body:', JSON.stringify(req.body, null, 2));
      
      const response = await axios.post(
        process.env.CLAUDE_API_ENDPOINT!,
        {
          model: req.body.model,
          max_tokens: req.body.max_tokens,
          messages: req.body.messages,
        },
        {
          headers: {
            'x-api-key': process.env.CLAUDE_API_KEY,
            'Content-Type': 'application/json',
            'anthropic-version': '2023-06-01'
          },
        }
      );
      
      console.log('Claude API response:', response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Detailed error calling Claude API:', error);
      if (axios.isAxiosError(error)) {
        console.error('Axios error response:', error.response?.data);
        console.error('Axios error status:', error.response?.status);
        console.error('Axios error headers:', error.response?.headers);
        res.status(error.response?.status || 500).json({ 
          error: 'Error calling Claude API', 
          details: error.response?.data || error.message 
        });
      } else {
        res.status(500).json({ 
          error: 'Error calling Claude API', 
          details: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}