/**
 * PH.ML_LAB - Hyprland Terminal Simulator (Arch Linux Aesthetic)
 * Tier 1: Text-Typing & Sequenced Boot Emulation
 */

document.addEventListener("DOMContentLoaded", function() {
  
  // 1. ANIMAZIONE DI INGRESSO DELLA PAGINA (Anime.js)
  anime({
    targets: 'h1.title, .quarto-title h1',
    opacity: [0, 1],
    translateX: [-15, 0],
    duration: 600,
    easing: 'cubicBezier(0.16, 1, 0.3, 1)'
  });

  anime({
    targets: '#hypr-terminal-window',
    opacity: [0, 1],
    scale: [0.99, 1],
    duration: 700,
    easing: 'cubicBezier(0.16, 1, 0.3, 1)',
    delay: 150
  });

  // 2. LOGICA DI SIMULAZIONE DEL TERMINALE KITTY/ALACRITTY
  const terminalBody = document.getElementById('hypr-terminal-body');
  if (!terminalBody) return;

  // I blocchi di testo che simuleranno i comandi sul terminale
  const terminalLines = [
    '<span class="prompt">[kiize@archlab ~]$</span> fastfetch',
    ' ',
    '<span class="arch-logo">       /\\       </span>   <span class="info-key">OS</span>: Arch Linux x86_64',
    '<span class="arch-logo">      /  \\      </span>   <span class="info-key">Kernel</span>: Linux 2026.07-kinetic',
    '<span class="arch-logo">     /\\   \\     </span>   <span class="info-key">Uptime</span>: 42 mins',
    '<span class="arch-logo">    /  __  \\    </span>   <span class="info-key">WM</span>: Hyprland (Wayland)',
    '<span class="arch-logo">   /  (  )  \\   </span>   <span class="info-key">Terminal</span>: Kitty',
    '<span class="arch-logo">  /__________\\  </span>   <span class="info-key">Shell</span>: zsh 5.9',
    ' ',
    '<span class="prompt">[kiize@archlab ~]$</span> ./run_quantum_simulation.sh',
    '<span class="system-msg">[INFO] Initializing grid telemetry...</span>',
    '<span class="system-msg">[SUCCESS] Neural topology synchronized. Ready.</span>',
    '<span class="prompt">[kiize@archlab ~]$</span> <span class="cursor">█</span>'
  ];

  let currentLineIndex = 0;

  function typeTerminalOutput() {
    if (currentLineIndex >= terminalLines.length) return;

    // Estraiamo la riga corrente
    const lineText = terminalLines[currentLineIndex];
    
    // Creiamo un nuovo paragrafo per la riga di codice
    const lineElement = document.createElement('div');
    lineElement.className = 'terminal-line';
    lineElement.innerHTML = lineText;
    
    // Rimuoviamo il cursore lampeggiante dalla riga precedente (se presente)
    const oldCursor = terminalBody.querySelector('.cursor');
    if (oldCursor && currentLineIndex < terminalLines.length - 1) {
      oldCursor.remove();
    }

    // Aggiungiamo la riga al terminale
    terminalBody.appendChild(lineElement);
    
    // Scroll automatico verso il basso se l'output si allunga
    terminalBody.scrollTop = terminalBody.scrollHeight;

    currentLineIndex++;

    // Anime.js orchestra il delay tra una riga e l'altra per simulare la digitazione umana
    let delay = 120; // Velocità standard per il testo normale
    if (lineText.includes('fastfetch') || lineText.includes('simulation')) {
      delay = 800; // Pausa riflessiva dopo aver premuto "Invio" su un comando
    } else if (lineText.includes('[INFO]')) {
      delay = 400; // Ritardo di elaborazione del sistema
    }

    setTimeout(typeTerminalOutput, delay);
  }

  // Avvia la digitazione simulata dopo un piccolo delay iniziale di caricamento della finestra
  setTimeout(typeTerminalOutput, 600);
});