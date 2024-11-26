import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { english, italian, categories } = await request.json();
    
    const query = `
      INSERT INTO sentences (english_text, italian_text, categories)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    
    const result = await pool.query(query, [english, italian, categories]);
    
    return NextResponse.json({ success: true, sentence: result.rows[0] });
  } catch (error) {
    console.error('Error storing sentence:', error);
    return NextResponse.json({ success: false, error: 'Failed to store sentence' }, { status: 500 });
  }
} 