import React, { useState } from 'react';
import {
  Activity,
  User,
  Calendar,
  ShieldAlert,
  Terminal,
  Cpu,
  Dices,
  Bot,
  Send,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';

/**
 * Custom high-fidelity mockups for featured projects.
 * Designed to provide authentic domain-specific visual representations without external image dependencies.
 */

// 1. Hospital Management System Mockup
export function HospitalMockup() {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#0F1117] rounded-2xl p-4 sm:p-5 border border-cyan-500/20 flex flex-col justify-between font-sans select-none overflow-hidden relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
            HMS
          </div>
          <span className="text-xs font-semibold text-white tracking-wide">
            MediCare Portal &bull; Patient Workflows
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            FastAPI Live
          </span>
        </div>
      </div>

      {/* Mini Stat Cards */}
      <div className="grid grid-cols-3 gap-2 my-3">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-zinc-400 block">Total Patients</span>
          <span className="text-base sm:text-lg font-bold text-white">1,248</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-zinc-400 block">Bed Occupancy</span>
          <span className="text-base sm:text-lg font-bold text-cyan-400">84%</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-zinc-400 block">Appointments</span>
          <span className="text-base sm:text-lg font-bold text-purple-400">32 Today</span>
        </div>
      </div>

      {/* Mock Table */}
      <div className="rounded-xl bg-[#090A0E] border border-white/[0.06] overflow-hidden text-xs">
        <div className="grid grid-cols-12 px-3 py-2 bg-white/[0.02] text-zinc-400 font-mono text-[10px] uppercase border-b border-white/[0.04]">
          <span className="col-span-5">Patient Name</span>
          <span className="col-span-4">Department</span>
          <span className="col-span-3 text-right">Status</span>
        </div>
        <div className="divide-y divide-white/[0.03]">
          <div className="grid grid-cols-12 px-3 py-2 items-center text-zinc-300">
            <span className="col-span-5 font-medium flex items-center gap-1.5">
              <User size={12} className="text-cyan-400" />
              R. Sharma
            </span>
            <span className="col-span-4 text-zinc-400 text-[11px]">Cardiology</span>
            <span className="col-span-3 text-right">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">Admitted</span>
            </span>
          </div>
          <div className="grid grid-cols-12 px-3 py-2 items-center text-zinc-300">
            <span className="col-span-5 font-medium flex items-center gap-1.5">
              <User size={12} className="text-purple-400" />
              A. Verma
            </span>
            <span className="col-span-4 text-zinc-400 text-[11px]">Neurology</span>
            <span className="col-span-3 text-right">
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px]">In Triage</span>
            </span>
          </div>
          <div className="grid grid-cols-12 px-3 py-2 items-center text-zinc-300">
            <span className="col-span-5 font-medium flex items-center gap-1.5">
              <User size={12} className="text-blue-400" />
              S. Patel
            </span>
            <span className="col-span-4 text-zinc-400 text-[11px]">Orthopedics</span>
            <span className="col-span-3 text-right">
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px]">Follow-up</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span>PostgreSQL Relational DB Connected</span>
        <span className="text-cyan-400 font-medium">React 18 UI</span>
      </div>
    </div>
  );
}

// 2. AI SOC Copilot Mockup
export function SecurityCopilotMockup() {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#0A0B10] rounded-2xl p-4 sm:p-5 border border-purple-500/25 flex flex-col justify-between font-mono select-none overflow-hidden relative">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-bold text-purple-300 tracking-wide ml-2">
            AI SOC COPILOT // WAZUH RAG ENGINE
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
          EVENT ID: SEC-9402
        </span>
      </div>

      {/* Security Alert Feed */}
      <div className="my-2 p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-start gap-2.5">
        <ShieldAlert size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="text-[11px] leading-tight">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-bold text-white">Rule 5710: SSH Brute-Force Attempt</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-500/20 text-red-300">Level 10</span>
          </div>
          <p className="text-zinc-400 text-[10px]">Src IP: 198.51.100.44 &bull; Target: auth.service.internal</p>
        </div>
      </div>

      {/* AI Copilot RAG Analysis Stream */}
      <div className="p-3 rounded-xl bg-[#050608] border border-white/[0.06] flex-1 flex flex-col justify-center text-xs">
        <div className="flex items-center gap-1.5 text-purple-400 text-[11px] mb-1 font-semibold">
          <Sparkles size={13} />
          <span>RAG Copilot Synthesis</span>
        </div>
        <p className="text-zinc-300 text-[11px] leading-relaxed">
          <span className="text-purple-400">&gt;</span> Correlating SSH authentication anomalies against historical IP reputation. Identified 42 consecutive failures followed by root password query. Recommend immediate IP blacklist.
        </p>
      </div>

      {/* Bottom Triage Status */}
      <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
        <span>Vector Search: 98.4% Match</span>
        <span className="text-purple-400 font-semibold">Triage Assistant Mode</span>
      </div>
    </div>
  );
}

// 3. Dice Game Mockup
export function DiceGameMockup() {
  const [diceValue, setDiceValue] = useState(6);
  const [score, setScore] = useState(24);
  const [rolls, setRolls] = useState(4);

  const rollDice = () => {
    const nextVal = Math.floor(Math.random() * 6) + 1;
    setDiceValue(nextVal);
    setScore((s) => s + nextVal);
    setRolls((r) => r + 1);
  };

  return (
    <div className="w-full h-full min-h-[300px] bg-[#120F0A] rounded-2xl p-4 sm:p-5 border border-amber-500/20 flex flex-col justify-between font-sans select-none overflow-hidden relative">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <Dices size={16} />
          </div>
          <span className="text-xs font-semibold text-white tracking-wide">
            Interactive Dice Logic Game
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
          Interactive Demo
        </span>
      </div>

      {/* Center 3D-styled interactive dice display */}
      <div className="flex flex-col items-center justify-center my-4 py-2">
        <button
          type="button"
          onClick={rollDice}
          className="group relative w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-0.5 shadow-xl shadow-amber-500/20 transition-transform active:scale-90 hover:scale-105"
          title="Click to roll dice!"
        >
          <div className="w-full h-full bg-[#18120A] rounded-[14px] flex items-center justify-center border border-amber-400/30">
            <span className="text-4xl font-black text-amber-400 font-mono tracking-wider">
              {diceValue}
            </span>
          </div>
          <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-amber-500 text-[9px] font-black text-black uppercase">
            Roll
          </span>
        </button>

        <span className="text-[11px] font-mono text-zinc-400 mt-3">
          Click the dice to test interactive DOM state
        </span>
      </div>

      {/* Game State Panel */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.08] text-center">
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-zinc-400 block">Accumulated Score</span>
          <span className="text-base font-bold text-amber-400">{score}</span>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-zinc-400 block">Total Rolls</span>
          <span className="text-base font-bold text-white">{rolls}</span>
        </div>
      </div>
    </div>
  );
}

// 4. Study Chat Bot Mockup
export function StudyBotMockup() {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#0A120E] rounded-2xl p-4 sm:p-5 border border-emerald-500/25 flex flex-col justify-between font-sans select-none overflow-hidden relative">
      {/* Bot Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <Bot size={16} />
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">
              StudyChat AI Assistant
            </span>
            <span className="text-[9px] font-mono text-emerald-400">Online &bull; Python/NLP</span>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
          Academic Tutor
        </span>
      </div>

      {/* Chat Messages Stream */}
      <div className="my-3 space-y-2.5 text-xs">
        {/* User prompt */}
        <div className="flex justify-end">
          <div className="max-w-[85%] bg-emerald-700/30 border border-emerald-500/30 rounded-2xl rounded-tr-none px-3.5 py-2 text-zinc-200">
            <p className="text-[11px]">Can you summarize the difference between stack and heap memory in C?</p>
          </div>
        </div>

        {/* Bot Response */}
        <div className="flex justify-start">
          <div className="max-w-[90%] bg-white/[0.04] border border-white/[0.08] rounded-2xl rounded-tl-none px-3.5 py-2.5 text-zinc-300">
            <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-semibold mb-1">
              <Sparkles size={11} />
              <span>StudyBot Summary</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              <strong className="text-white">Stack:</strong> Fast, static allocation managed automatically by CPU for local variables.
              <br />
              <strong className="text-white">Heap:</strong> Dynamic memory (`malloc`/`free`), manual lifecycle, flexible size.
            </p>
          </div>
        </div>
      </div>

      {/* Input Field Mock */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2">
        <div className="flex-1 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[11px] text-zinc-400 flex items-center justify-between">
          <span>Ask a study question...</span>
          <Send size={12} className="text-emerald-400" />
        </div>
      </div>
    </div>
  );
}

export function ProjectMockupViewer({ type }) {
  switch (type) {
    case 'hospital':
      return <HospitalMockup />;
    case 'security':
      return <SecurityCopilotMockup />;
    case 'dice':
      return <DiceGameMockup />;
    case 'studybot':
      return <StudyBotMockup />;
    default:
      return <HospitalMockup />;
  }
}
