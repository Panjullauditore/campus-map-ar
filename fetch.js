fetch("https://nominatim.openstreetmap.org/search?q=Universitas+Diponegoro&format=json&limit=50", {headers:{"User-Agent": "antigravity-bot"}}).then(r => r.json()).then(console.log)
