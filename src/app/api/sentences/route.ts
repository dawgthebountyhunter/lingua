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

export async function GET() {
  try {
    const query = `
      SELECT * FROM sentences
      ORDER BY created_at DESC
    `;
    
    const result = await pool.query(query);
    
    return NextResponse.json({ 
      success: true, 
      sentences: result.rows 
    });
  } catch (error) {
    console.error('Error fetching sentences:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch sentences' }, 
      { status: 500 }
    );
  }
} 