// =============================================
// server.js - Mobile Legends API Backend
// =============================================

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ===== Local Player Database (ဒီမိုအတွက်) =====
const PLAYER_DB = {
    '12345678': { name: 'ProGamer', server: '9876' },
    '87654321': { name: 'DarkSoul', server: '1234' },
    '11111111': { name: 'Lightning', server: '5678' },
    '22222222': { name: 'ShadowFox', server: '4321' },
    '33333333': { name: 'DragonKing', server: '8765' },
    '44444444': { name: 'NightHawk', server: '9999' },
    '55555555': { name: 'StormRider', server: '1111' },
    '66666666': { name: 'Phoenix', server: '2222' },
    '77777777': { name: 'Warrior', server: '3333' },
    '88888888': { name: 'Legend', server: '4444' },
    '99999999': { name: 'Mystic', server: '5555' }
};

// ===== API Endpoint - Player Check =====
app.get('/api/check-player', async (req, res) => {
    const { gameId, serverId } = req.query;
    
    if (!gameId || !serverId) {
        return res.json({ success: false, message: 'Game ID and Server ID are required' });
    }

    // ===== 1. Local DB ကို အရင်စစ် =====
    if(PLAYER_DB[gameId] && PLAYER_DB[gameId].server === serverId){
        return res.json({ 
            success: true, 
            username: PLAYER_DB[gameId].name,
            source: 'local'
        });
    }

    // ===== 2. Public API ကို ဆက်စစ် =====
    try {
        const response = await axios.get(`https://api-mobilelegends.vercel.app/api/player/${gameId}/${serverId}`, {
            timeout: 5000
        });
        
        if (response.data && response.data.success && response.data.username) {
            return res.json({
                success: true,
                username: response.data.username,
                source: 'api'
            });
        }
    } catch (error) {
        console.log('Public API error, using local only');
    }

    // ===== 3. မတွေ့ရင် =====
    res.json({ success: false, message: 'Player not found' });
});

// ===== Health Check =====
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'MLBB API Server is running' });
});

app.listen(PORT, () => {
    console.log(`🚀 MLBB API Server running on http://localhost:${PORT}`);
    console.log(`📋 Test: http://localhost:${PORT}/api/check-player?gameId=12345678&serverId=9876`);
});
