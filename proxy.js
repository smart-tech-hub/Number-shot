// এই ফাইলটি আপনার প্রজেক্টের api ফোল্ডারে থাকবে
export default async function handler(req, res) {
    const targetUrl = "https://draw.ar-lottery01.com/WinGo/WinGo_30S/GetHistoryIssuePage.json";
    
    try {
        const response = await fetch(targetUrl, {
            method: 'GET',
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36",
                "Referer": "https://dkwin.asia/"
            }
        });
        const data = await response.json();
        
        // CORS এরর দূর করার জন্য পারমিশন
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
