const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media';

export async function getInstagramFeed(accessToken: string) {
  try {
    const response = await fetch(
      `${INSTAGRAM_API_URL}?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${accessToken}`
    );
    
    if (!response.ok) {
      throw new Error('Instagram API request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    throw error;
  }
} 
