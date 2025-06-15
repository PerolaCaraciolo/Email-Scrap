
export function emailTemplate(signos: { nome: string, previsao: string }[]): string {
    const cards = signos.map(signo => `
        <div style="flex: 0 0 48%; background: #2d2d55; margin: 1%; padding: 15px; border-radius: 10px;">
            
            <h2 style="color: #c4a5ff; margin-bottom: 10px;">${signo.nome}</h2>
            
            <p style="color: #fff; font-size: 15px; line-height: 1.5;">${signo.previsao}</p>

        </div>
    `).join('');

    return `
        <div style="background-color:#1c1c3c; color:#fff; padding:30px; font-family:sans-serif;">
            
            <h1 style="text-align:center; color:#c4a5ff; margin-bottom: 30px;">✨ Horóscopo do Dia ✨</h1>
            
            <div style="justify-content: space-between;">
                ${cards}
            </div>

            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Banner"
                style="width: 100%; height: auto; max-height: 120px; object-fit: cover; margin-top: 40px; border-radius: 10px;" />
            
            <p style="text-align:center; margin-top: 10px; font-size: 14px;">Com carinho, do AstroBoletim 🌌</p>
        </div>
    `;
}
