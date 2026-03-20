import {
  Box, Container, Typography, Grid, Chip, Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import GlowCard from '../components/GlowCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

/* ── Animated SVG Node Icons ──────────────────────────── */
const nodeIcons = {
  // AI Scheduler nodes
  'Patient Preferences': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <circle cx={x} cy={y-2} r={s*0.3} fill="none" stroke="#097C87" strokeWidth="1.2" />
      <circle cx={x} cy={y-6} r={s*0.15} fill="#097C87" />
      <path d={`M${x-s*0.2} ${y+2} Q${x} ${y-2} ${x+s*0.2} ${y+2}`} fill="none" stroke="#097C87" strokeWidth="1" />
      <line x1={x+s*0.15} y1={y+5} x2={x+s*0.35} y2={y+5} stroke="#065A62" strokeWidth="0.8" className="blink-line" />
      <line x1={x+s*0.15} y1={y+8} x2={x+s*0.28} y2={y+8} stroke="#065A62" strokeWidth="0.8" />
    </g>
  ),
  'Physician Orders': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.25} y={y-s*0.35} width={s*0.5} height={s*0.65} rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <line x1={x-s*0.13} y1={y-s*0.15} x2={x+s*0.13} y2={y-s*0.15} stroke="#065A62" strokeWidth="0.8" />
      <line x1={x-s*0.13} y1={y-s*0.02} x2={x+s*0.13} y2={y-s*0.02} stroke="#065A62" strokeWidth="0.8" />
      <line x1={x-s*0.13} y1={y+s*0.11} x2={x+s*0.05} y2={y+s*0.11} stroke="#065A62" strokeWidth="0.8" />
      <path d={`M${x+s*0.05} ${y+s*0.18} l${s*0.06} ${s*0.06} l${s*0.12} -${s*0.12}`} fill="none" stroke="#097C87" strokeWidth="1.2" className="check-draw" />
    </g>
  ),
  'Dynamic Templates': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.28} y={y-s*0.3} width={s*0.56} height={s*0.6} rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <rect x={x-s*0.18} y={y-s*0.18} width={s*0.2} height={s*0.12} rx="1" fill="#F8FAFB" stroke="#097C87" strokeWidth="0.6" className="template-shift" />
      <rect x={x+s*0.05} y={y-s*0.18} width={s*0.14} height={s*0.12} rx="1" fill="#F8FAFB" stroke="#065A62" strokeWidth="0.6" />
      <rect x={x-s*0.18} y={y+s*0.02} width={s*0.36} height={s*0.1} rx="1" fill="#F8FAFB" stroke="#065A62" strokeWidth="0.6" />
    </g>
  ),
  'Automated Waitlist': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.25} y={y-s*0.25} width={s*0.5} height={s*0.5} rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
      {[-1, 0, 1].map(j => (
        <g key={j}>
          <circle cx={x-s*0.12} cy={y+j*s*0.12} r={s*0.04} fill="#097C87" className={j === -1 ? 'waitlist-pop' : ''} />
          <line x1={x-s*0.04} y1={y+j*s*0.12} x2={x+s*0.16} y2={y+j*s*0.12} stroke="#065A62" strokeWidth="0.8" />
        </g>
      ))}
    </g>
  ),
  'Best Slot Finder': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.3} y={y-s*0.3} width={s*0.6} height={s*0.55} rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <line x1={x-s*0.3} y1={y-s*0.14} x2={x+s*0.3} y2={y-s*0.14} stroke="#065A62" strokeWidth="0.6" />
      {[0, 1, 2].map(col => [0, 1].map(row => (
        <rect key={`${col}-${row}`} x={x-s*0.24+col*s*0.18} y={y-s*0.08+row*s*0.14} width={s*0.14} height={s*0.1} rx="1"
          fill={col === 1 && row === 0 ? '#097C87' : '#F8FAFB'} stroke={col === 1 && row === 0 ? '#097C87' : '#065A62'} strokeWidth="0.5"
          className={col === 1 && row === 0 ? 'slot-glow' : ''} />
      )))}
    </g>
  ),
  'Patient Communication': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <path d={`M${x-s*0.25} ${y-s*0.2} h${s*0.5} v${s*0.32} h-${s*0.3} l-${s*0.1} ${s*0.1} v-${s*0.1} h-${s*0.1} z`} fill="none" stroke="#097C87" strokeWidth="1.2" />
      <circle cx={x-s*0.08} cy={y-s*0.05} r={s*0.03} fill="#097C87" className="typing-dot typing-dot-1" />
      <circle cx={x} cy={y-s*0.05} r={s*0.03} fill="#097C87" className="typing-dot typing-dot-2" />
      <circle cx={x+s*0.08} cy={y-s*0.05} r={s*0.03} fill="#097C87" className="typing-dot typing-dot-3" />
    </g>
  ),
  // AI Referral Coordinator nodes
  'OCR Extraction': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.22} y={y-s*0.3} width={s*0.44} height={s*0.6} rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <line x1={x-s*0.12} y1={y-s*0.15} x2={x+s*0.12} y2={y-s*0.15} stroke="#FCA47C" strokeWidth="0.7" />
      <line x1={x-s*0.12} y1={y-s*0.04} x2={x+s*0.12} y2={y-s*0.04} stroke="#FCA47C" strokeWidth="0.7" />
      <line x1={x-s*0.12} y1={y+s*0.07} x2={x+s*0.06} y2={y+s*0.07} stroke="#FCA47C" strokeWidth="0.7" />
      <rect x={x-s*0.3} y={y-s*0.12} width={s*0.6} height={s*0.04} fill="#097C87" opacity="0.3" className="scan-line" />
    </g>
  ),
  'Patient Matching': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <circle cx={x-s*0.1} cy={y-s*0.08} r={s*0.14} fill="none" stroke="#097C87" strokeWidth="1.2" />
      <circle cx={x+s*0.1} cy={y-s*0.08} r={s*0.14} fill="none" stroke="#065A62" strokeWidth="1.2" />
      <path d={`M${x} ${y-s*0.2} v${s*0.24}`} fill="none" stroke="#097C87" strokeWidth="1.5" className="match-pulse" />
      <line x1={x-s*0.08} y1={y+s*0.14} x2={x+s*0.08} y2={y+s*0.14} stroke="#065A62" strokeWidth="0.7" />
    </g>
  ),
  'Insurance Verify': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <path d={`M${x} ${y-s*0.3} l${s*0.22} ${s*0.1} v${s*0.2} c0 ${s*0.15} -${s*0.22} ${s*0.22} -${s*0.22} ${s*0.22} c0 0 -${s*0.22} -${s*0.07} -${s*0.22} -${s*0.22} v-${s*0.2} z`} fill="none" stroke="#097C87" strokeWidth="1.2" />
      <path d={`M${x-s*0.08} ${y} l${s*0.06} ${s*0.06} l${s*0.12} -${s*0.12}`} fill="none" stroke="#097C87" strokeWidth="1.5" className="check-draw" />
    </g>
  ),
  'Specialist Routing': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <circle cx={x} cy={y-s*0.1} r={s*0.08} fill="#097C87" />
      <path d={`M${x} ${y+s*0.02} l-${s*0.2} ${s*0.18}`} fill="none" stroke="#065A62" strokeWidth="1" strokeDasharray="3 2" className="route-dash" />
      <path d={`M${x} ${y+s*0.02} l${s*0.2} ${s*0.18}`} fill="none" stroke="#065A62" strokeWidth="1" strokeDasharray="3 2" className="route-dash" />
      <path d={`M${x} ${y+s*0.02} v${s*0.2}`} fill="none" stroke="#097C87" strokeWidth="1.2" strokeDasharray="3 2" className="route-dash" />
      <circle cx={x-s*0.2} cy={y+s*0.22} r={s*0.04} fill="#065A62" />
      <circle cx={x+s*0.2} cy={y+s*0.22} r={s*0.04} fill="#065A62" />
      <circle cx={x} cy={y+s*0.24} r={s*0.04} fill="#097C87" className="slot-glow" />
    </g>
  ),
  'Lifecycle Tracking': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <path d={`M${x-s*0.25} ${y} h${s*0.5}`} fill="none" stroke="#065A62" strokeWidth="1" />
      {[-1, 0, 1].map(j => (
        <g key={j}>
          <circle cx={x+j*s*0.18} cy={y} r={s*0.05} fill={j <= 0 ? '#097C87' : '#F8FAFB'} stroke="#097C87" strokeWidth="1" className={j === 0 ? 'lifecycle-fill' : ''} />
        </g>
      ))}
      <path d={`M${x-s*0.18} ${y-s*0.15} l${s*0.05} ${s*0.08} M${x} ${y-s*0.15} l${s*0.05} ${s*0.08}`} fill="none" stroke="#065A62" strokeWidth="0.7" />
    </g>
  ),
  'Priority Scoring': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      {[0, 1, 2].map(j => (
        <rect key={j} x={x-s*0.18+j*s*0.14} y={y+s*0.15-[s*0.25, s*0.35, s*0.45][j]} width={s*0.1} height={[s*0.25, s*0.35, s*0.45][j]} rx="1"
          fill={['#FCA47C', '#065A62', '#097C87'][j]} className={j === 2 ? 'bar-grow' : ''} />
      ))}
    </g>
  ),
  // AI Care Manager nodes
  'Symptom Monitoring': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.28} y={y-s*0.2} width={s*0.56} height={s*0.4} rx="3" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <polyline points={`${x-s*0.2},${y+s*0.05} ${x-s*0.1},${y-s*0.05} ${x-s*0.02},${y+s*0.08} ${x+s*0.06},${y-s*0.1} ${x+s*0.14},${y} ${x+s*0.2},${y}`}
        fill="none" stroke="#097C87" strokeWidth="1.2" className="heartbeat-line" />
    </g>
  ),
  'Care Plans': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.22} y={y-s*0.28} width={s*0.44} height={s*0.56} rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <line x1={x-s*0.1} y1={y-s*0.14} x2={x+s*0.12} y2={y-s*0.14} stroke="#065A62" strokeWidth="0.8" />
      <line x1={x-s*0.1} y1={y-s*0.02} x2={x+s*0.12} y2={y-s*0.02} stroke="#065A62" strokeWidth="0.8" />
      <line x1={x-s*0.1} y1={y+s*0.1} x2={x+s*0.06} y2={y+s*0.1} stroke="#065A62" strokeWidth="0.8" />
      <circle cx={x} cy={y+s*0.22} r={s*0.04} fill="#097C87" className="slot-glow" />
      <path d={`M${x-s*0.03} ${y+s*0.22} h${s*0.06} M${x} ${y+s*0.19} v${s*0.06}`} stroke="#F8FAFB" strokeWidth="0.8" />
    </g>
  ),
  'Staff Review Queue': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      {[0, 1, 2].map(j => (
        <rect key={j} x={x-s*0.22+j*2} y={y-s*0.2+j*3} width={s*0.44} height={s*0.14} rx="2" fill={j === 0 ? '#F8FAFB' : 'none'} stroke={j === 0 ? '#097C87' : '#065A62'} strokeWidth={j === 0 ? '1.2' : '0.8'}
          className={j === 0 ? 'queue-slide' : ''} />
      ))}
    </g>
  ),
  'Billing Packets': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.2} y={y-s*0.25} width={s*0.4} height={s*0.5} rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <text x={x} y={y-s*0.05} textAnchor="middle" fill="#097C87" fontSize={s*0.16} fontWeight="700" fontFamily="DM Sans Variable, sans-serif">$</text>
      <line x1={x-s*0.1} y1={y+s*0.1} x2={x+s*0.1} y2={y+s*0.1} stroke="#065A62" strokeWidth="0.7" />
    </g>
  ),
  'Patient Check-ins': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <circle cx={x} cy={y-s*0.12} r={s*0.12} fill="none" stroke="#097C87" strokeWidth="1.2" />
      <circle cx={x} cy={y-s*0.15} r={s*0.05} fill="#097C87" />
      <path d={`M${x-s*0.18} ${y+s*0.08} q${s*0.18} -${s*0.12} ${s*0.36} 0`} fill="none" stroke="#097C87" strokeWidth="1.2" />
      <path d={`M${x+s*0.18} ${y+s*0.08} l${s*0.08} -${s*0.04} l${s*0.02} ${s*0.1}`} fill="none" stroke="#097C87" strokeWidth="1" className="check-draw" />
    </g>
  ),
  'Program Compliance': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <path d={`M${x} ${y-s*0.28} l${s*0.2} ${s*0.08} v${s*0.18} c0 ${s*0.14} -${s*0.2} ${s*0.2} -${s*0.2} ${s*0.2} c0 0 -${s*0.2} -${s*0.06} -${s*0.2} -${s*0.2} v-${s*0.18} z`} fill="#F8FAFB" stroke="#097C87" strokeWidth="1.2" />
      <path d={`M${x-s*0.06} ${y-s*0.04} l${s*0.04} ${s*0.04} l${s*0.1} -${s*0.1}`} fill="none" stroke="#097C87" strokeWidth="1.5" className="check-draw" />
    </g>
  ),
  // AI Patient Companion nodes
  'Voice & SMS': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.12} y={y-s*0.25} width={s*0.24} height={s*0.45} rx="3" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <line x1={x-s*0.06} y1={y+s*0.12} x2={x+s*0.06} y2={y+s*0.12} stroke="#065A62" strokeWidth="0.6" />
      <path d={`M${x+s*0.18} ${y-s*0.12} q${s*0.06} ${s*0.06} 0 ${s*0.12}`} fill="none" stroke="#065A62" strokeWidth="0.8" className="signal-wave" />
      <path d={`M${x+s*0.24} ${y-s*0.18} q${s*0.08} ${s*0.1} 0 ${s*0.22}`} fill="none" stroke="#FCA47C" strokeWidth="0.6" className="signal-wave" />
    </g>
  ),
  'Triage & Scoring': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <circle cx={x} cy={y} r={s*0.22} fill="none" stroke="#097C87" strokeWidth="1.2" />
      <path d={`M${x} ${y-s*0.22} A${s*0.22} ${s*0.22} 0 0 1 ${x+s*0.22} ${y}`} fill="none" stroke="#097C87" strokeWidth="2.5" strokeLinecap="round" className="gauge-fill" />
      <line x1={x} y1={y} x2={x+s*0.12} y2={y-s*0.1} stroke="#065A62" strokeWidth="1.5" className="gauge-needle" />
      <circle cx={x} cy={y} r={s*0.03} fill="#065A62" />
    </g>
  ),
  'Navigation': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <circle cx={x} cy={y-s*0.05} r={s*0.2} fill="none" stroke="#065A62" strokeWidth="0.8" strokeDasharray="3 2" />
      <circle cx={x} cy={y-s*0.05} r={s*0.1} fill="none" stroke="#097C87" strokeWidth="1" />
      <circle cx={x} cy={y-s*0.05} r={s*0.03} fill="#097C87" className="slot-glow" />
      <path d={`M${x} ${y+s*0.15} v${s*0.08}`} stroke="#097C87" strokeWidth="1" />
      <path d={`M${x-s*0.04} ${y+s*0.2} h${s*0.08}`} stroke="#097C87" strokeWidth="1" />
    </g>
  ),
  'Survivorship': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <path d={`M${x} ${y-s*0.08} c-${s*0.12} -${s*0.18} -${s*0.28} ${s*0.02} 0 ${s*0.2} c${s*0.28} -${s*0.18} ${s*0.12} -${s*0.38} 0 -${s*0.2}`} fill="#F8FAFB" stroke="#097C87" strokeWidth="1.2" className="heart-beat" />
    </g>
  ),
  'SDOH Screening': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <circle cx={x} cy={y-s*0.05} r={s*0.22} fill="none" stroke="#097C87" strokeWidth="1.2" />
      <path d={`M${x-s*0.08} ${y-s*0.12} v${s*0.08} h-${s*0.08} v${s*0.08} h${s*0.08} v${s*0.08} h${s*0.08} v-${s*0.08} h${s*0.08} v-${s*0.08} h-${s*0.08} v-${s*0.08} z`} fill="#097C87" className="cross-pulse" />
    </g>
  ),
  'Prep & Education': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <path d={`M${x-s*0.22} ${y-s*0.15} l${s*0.22} -${s*0.1} l${s*0.22} ${s*0.1}`} fill="none" stroke="#097C87" strokeWidth="1.2" />
      <rect x={x-s*0.22} y={y-s*0.15} width={s*0.44} height={s*0.3} rx="1" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <line x1={x-s*0.12} y1={y-s*0.02} x2={x+s*0.12} y2={y-s*0.02} stroke="#065A62" strokeWidth="0.7" />
      <line x1={x-s*0.12} y1={y+s*0.08} x2={x+s*0.06} y2={y+s*0.08} stroke="#065A62" strokeWidth="0.7" />
    </g>
  ),
  // AI Data Analyst nodes
  'Document Ingestion': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.14} y={y-s*0.28} width={s*0.28} height={s*0.36} rx="1" fill="none" stroke="#065A62" strokeWidth="0.8" />
      <rect x={x-s*0.2} y={y-s*0.22} width={s*0.28} height={s*0.36} rx="1" fill="none" stroke="#097C87" strokeWidth="1" />
      <rect x={x-s*0.26} y={y-s*0.16} width={s*0.28} height={s*0.36} rx="1" fill="#F8FAFB" stroke="#097C87" strokeWidth="1.2" />
      <line x1={x-s*0.18} y1={y-s*0.02} x2={x-s*0.04} y2={y-s*0.02} stroke="#065A62" strokeWidth="0.6" />
      <line x1={x-s*0.18} y1={y+s*0.08} x2={x-s*0.08} y2={y+s*0.08} stroke="#065A62" strokeWidth="0.6" />
    </g>
  ),
  'Clinical NLP': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.25} y={y-s*0.18} width={s*0.5} height={s*0.36} rx="3" fill="none" stroke="#097C87" strokeWidth="1.2" />
      <text x={x} y={y+s*0.02} textAnchor="middle" fill="#097C87" fontSize={s*0.1} fontWeight="600" fontFamily="monospace">NLP</text>
      <path d={`M${x-s*0.18} ${y+s*0.12} h${s*0.12}`} stroke="#065A62" strokeWidth="0.8" className="blink-line" />
    </g>
  ),
  'Pre-Visit Briefs': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.2} y={y-s*0.25} width={s*0.4} height={s*0.5} rx="2" fill="#F8FAFB" stroke="#097C87" strokeWidth="1.2" />
      <circle cx={x} cy={y-s*0.1} r={s*0.06} fill="#097C87" />
      <line x1={x-s*0.1} y1={y+s*0.04} x2={x+s*0.1} y2={y+s*0.04} stroke="#097C87" strokeWidth="0.7" />
      <line x1={x-s*0.08} y1={y+s*0.12} x2={x+s*0.08} y2={y+s*0.12} stroke="#065A62" strokeWidth="0.6" />
    </g>
  ),
  'Predictive Models': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <polyline points={`${x-s*0.2},${y+s*0.15} ${x-s*0.08},${y} ${x+s*0.04},${y+s*0.08} ${x+s*0.2},${y-s*0.15}`}
        fill="none" stroke="#097C87" strokeWidth="1.5" />
      <line x1={x+s*0.08} y1={y-s*0.04} x2={x+s*0.3} y2={y-s*0.22} stroke="#065A62" strokeWidth="0.8" strokeDasharray="3 2" className="route-dash" />
      <circle cx={x-s*0.08} cy={y} r={s*0.03} fill="#097C87" />
      <circle cx={x+s*0.04} cy={y+s*0.08} r={s*0.03} fill="#097C87" />
    </g>
  ),
  'Reporting': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <rect x={x-s*0.26} y={y-s*0.22} width={s*0.52} height={s*0.44} rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
      {[0, 1, 2, 3].map(j => (
        <rect key={j} x={x-s*0.18+j*s*0.1} y={y+s*0.12-[s*0.14, s*0.22, s*0.18, s*0.28][j]} width={s*0.06} height={[s*0.14, s*0.22, s*0.18, s*0.28][j]} rx="0.5"
          fill={['#FCA47C', '#065A62', '#FCA47C', '#097C87'][j]} />
      ))}
    </g>
  ),
  'Workflow Routing': (x, y, s, i) => (
    <g className={`node-float node-float-${i % 3}`}>
      <circle cx={x} cy={y-s*0.12} r={s*0.08} fill="#097C87" />
      <path d={`M${x-s*0.18} ${y+s*0.06} h${s*0.1} v${s*0.1} h-${s*0.1} z`} fill="none" stroke="#097C87" strokeWidth="1" />
      <path d={`M${x+s*0.08} ${y+s*0.06} h${s*0.1} v${s*0.1} h-${s*0.1} z`} fill="none" stroke="#065A62" strokeWidth="1" />
      <line x1={x-s*0.05} y1={y-s*0.04} x2={x-s*0.13} y2={y+s*0.06} stroke="#097C87" strokeWidth="0.8" />
      <line x1={x+s*0.05} y1={y-s*0.04} x2={x+s*0.13} y2={y+s*0.06} stroke="#065A62" strokeWidth="0.8" />
    </g>
  ),
};

/* ── Hub-Spoke SVG Diagram ─────────────────────────────── */
function HubDiagram({ title, subtitle, nodes, size = 320 }) {
  const cx = size / 2;
  const cy = size / 2;
  const hubR = size * 0.14;
  const orbitR = size * 0.38;
  const nodeR = size * 0.085;
  const uid = subtitle.replace(/\s/g, '');

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ maxWidth: size }}>
      <style>{`
        @keyframes hubPulse-${uid} { 0%,100%{r:${hubR}} 50%{r:${hubR + 2}} }
        @keyframes dashFlow { to { stroke-dashoffset: -20; } }
        @keyframes float0 { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-3px); } }
        @keyframes float1 { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-2px); } }
        @keyframes float2 { 0%,100%{ transform: translateY(-1px); } 50%{ transform: translateY(2px); } }
        @keyframes blinkLine { 0%,100%{ opacity:1; } 50%{ opacity:0.3; } }
        @keyframes scanAnim { 0%{ transform: translateY(-8px); } 100%{ transform: translateY(8px); } }
        @keyframes typingDot1 { 0%,100%{ opacity:0.3; } 30%{ opacity:1; } }
        @keyframes typingDot2 { 0%,100%{ opacity:0.3; } 50%{ opacity:1; } }
        @keyframes typingDot3 { 0%,100%{ opacity:0.3; } 70%{ opacity:1; } }
        @keyframes gaugeNeedle { 0%,100%{ transform: rotate(-20deg); } 50%{ transform: rotate(20deg); } }
        @keyframes heartBeat { 0%,100%{ transform: scale(1); } 15%{ transform: scale(1.15); } 30%{ transform: scale(1); } 45%{ transform: scale(1.1); } }
        @keyframes signalWave { 0%,100%{ opacity:0.3; } 50%{ opacity:1; } }
        @keyframes authSpin { to { transform: rotate(360deg); } }
        @keyframes checkDraw { 0%{ stroke-dashoffset: 20; } 60%,100%{ stroke-dashoffset: 0; } }
        @keyframes crossPulse { 0%,100%{ opacity:0.8; } 50%{ opacity:1; } }

        .hub-center-${uid} { animation: hubPulse-${uid} 3s ease-in-out infinite; }
        .spoke-line { animation: dashFlow 2s linear infinite; }
        .node-float-0 { animation: float0 4s ease-in-out infinite; }
        .node-float-1 { animation: float1 5s ease-in-out infinite; }
        .node-float-2 { animation: float2 4.5s ease-in-out infinite; }
        .blink-line { animation: blinkLine 2s ease-in-out infinite; }
        .scan-line { animation: scanAnim 2s ease-in-out infinite alternate; }
        .typing-dot-1 { animation: typingDot1 1.4s ease-in-out infinite; }
        .typing-dot-2 { animation: typingDot2 1.4s ease-in-out infinite; }
        .typing-dot-3 { animation: typingDot3 1.4s ease-in-out infinite; }
        .gauge-needle { animation: gaugeNeedle 3s ease-in-out infinite; transform-origin: center; }
        .heart-beat { animation: heartBeat 1.5s ease-in-out infinite; transform-origin: center; }
        .signal-wave { animation: signalWave 2s ease-in-out infinite; }
        .auth-spin { animation: authSpin 6s linear infinite; transform-origin: center; }
        .check-draw { stroke-dasharray: 20; animation: checkDraw 2.5s ease-in-out infinite; }
        .slot-glow { animation: blinkLine 2s ease-in-out infinite; }
        .cross-pulse { animation: crossPulse 2s ease-in-out infinite; }
        .heartbeat-line { stroke-dasharray: 60; stroke-dashoffset: 60; animation: checkDraw 2s linear infinite; }
        .route-dash { animation: dashFlow 1.5s linear infinite; }
        .bar-grow { animation: float0 3s ease-in-out infinite; }
        .waitlist-pop { animation: float0 2s ease-in-out infinite; }
        .template-shift { animation: float1 3s ease-in-out infinite; }
        .queue-slide { animation: float0 3s ease-in-out infinite; }
        .match-pulse { animation: blinkLine 2s ease-in-out infinite; }
        .lifecycle-fill { animation: blinkLine 3s ease-in-out infinite; }
        .trend-line { stroke-dasharray: 20; animation: checkDraw 3s ease-in-out infinite; }
        .star-spin { animation: float0 4s ease-in-out infinite; }
      `}</style>
      {/* Orbit ring */}
      <circle cx={cx} cy={cy} r={orbitR} fill="none" stroke="rgba(9,124,135,0.08)" strokeWidth="1" strokeDasharray="4 4" />
      {/* Glow ring */}
      <circle cx={cx} cy={cy} r={orbitR} fill="none" stroke="rgba(9,124,135,0.04)" strokeWidth="8" />
      {/* Spokes & nodes */}
      {nodes.map((node, i) => {
        const angle = (i * 2 * Math.PI) / nodes.length - Math.PI / 2;
        const nx = cx + orbitR * Math.cos(angle);
        const ny = cy + orbitR * Math.sin(angle);
        const iconFn = nodeIcons[node.label];
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="rgba(9,124,135,0.15)" strokeWidth="1.5" strokeDasharray="6 4" className="spoke-line" />
            {/* Node background */}
            <circle cx={nx} cy={ny} r={nodeR + 4} fill="rgba(248,250,251,0.3)" />
            <circle cx={nx} cy={ny} r={nodeR} fill="#FFFFFF" stroke="#097C87" strokeWidth="1.2" />
            {/* Animated icon */}
            {iconFn ? iconFn(nx, ny, nodeR * 2, i) : (
              <circle cx={nx} cy={ny} r={nodeR * 0.4} fill="#097C87" />
            )}
            {/* Label below node */}
            <text x={nx} y={ny + nodeR + 12} textAnchor="middle" fill="#065A62" fontSize={size * 0.026} fontWeight="600" fontFamily="DM Sans Variable, sans-serif">
              {node.label.length > 16 ? node.label.split(' ').slice(0, 2).join(' ') : node.label}
            </text>
            {node.label.length > 16 && (
              <text x={nx} y={ny + nodeR + 22} textAnchor="middle" fill="#065A62" fontSize={size * 0.026} fontWeight="600" fontFamily="DM Sans Variable, sans-serif">
                {node.label.split(' ').slice(2).join(' ')}
              </text>
            )}
          </g>
        );
      })}
      {/* Center hub */}
      <circle cx={cx} cy={cy} r={hubR + 8} fill="rgba(9,124,135,0.06)" />
      <circle cx={cx} cy={cy} r={hubR + 3} fill="rgba(9,124,135,0.1)" />
      <circle cx={cx} cy={cy} r={hubR} fill="#097C87" className={`hub-center-${uid}`} />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#F8FAFB" fontSize={size * 0.045} fontWeight="700" fontFamily="DM Sans Variable, sans-serif">
        AI
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="#F8FAFB" fontSize={size * 0.025} fontWeight="500" fontFamily="DM Sans Variable, sans-serif" letterSpacing="2">
        {subtitle}
      </text>
    </svg>
  );
}

/* ── AI Employee Data ──────────────────────────────────── */
const aiEmployees = [
  {
    title: 'AI Scheduler',
    role: 'Your AI Employee — Appointment Scheduler',
    tagline: 'Works 24/7 orchestrating every scheduling dimension — patients, providers, resources, protocols, and preferences.',
    nodes: [
      { label: 'Patient Preferences', sub: 'History & needs' },
      { label: 'Physician Orders', sub: 'Protocols & deps' },
      { label: 'Dynamic Templates', sub: 'Resource optimization' },
      { label: 'Automated Waitlist', sub: 'Fill empty slots' },
      { label: 'Best Slot Finder', sub: 'Optimal windows' },
      { label: 'Patient Communication', sub: 'Prep & reminders' },
    ],
    stats: [
      { icon: '✓', text: 'Works 24/7 with zero scheduling errors' },
      { icon: '★', text: 'Reduces scheduling time by 85%' },
      { icon: '✓', text: 'Communicates with patients proactively' },
    ],
    capabilities: [
      'Multi-resource orchestration across labs, physicians, infusion chairs, pharmacy, and nursing',
      'Protocol-aware sequencing — understands treatment cycles, drug sequences, and clinical dependencies',
      'Dynamic predictive template generation based on active treatment plans',
      'Insurance & authorization verification before scheduling',
      'Physician preference enforcement and scheduling rule management',
      'Patient self-scheduling with intelligent slot recommendations',
    ],
    metrics: [
      { value: '85%', label: 'Scheduling time reduction' },
      { value: '80%+', label: 'Resource utilization' },
      { value: '$1.8M', label: 'Annual savings/location' },
    ],
    hubSubtitle: 'SCHEDULER',
  },
  {
    title: 'AI Referral Coordinator',
    role: 'Your AI Employee — Referral Management',
    tagline: 'Processes every referral in 3 minutes flat. Zero referrals lost. Complete lifecycle tracking from intake to first appointment.',
    nodes: [
      { label: 'OCR Extraction', sub: 'Fax & PDF capture' },
      { label: 'Patient Matching', sub: 'Master Patient Index' },
      { label: 'Insurance Verify', sub: 'Real-time checks' },
      { label: 'Specialist Routing', sub: 'Smart matching' },
      { label: 'Lifecycle Tracking', sub: 'End-to-end audit' },
      { label: 'Priority Scoring', sub: 'Clinical urgency' },
    ],
    stats: [
      { icon: '✓', text: '3-minute referral to first contact' },
      { icon: '★', text: 'Zero referrals lost in process' },
      { icon: '✓', text: '100% referral tracking & accountability' },
    ],
    capabilities: [
      'OCR extraction from faxes, PDFs, and electronic referrals — instant data capture',
      'Intelligent patient matching against master patient index across 20+ EMR systems',
      'Automated insurance verification and network status checking',
      'Priority scoring based on clinical urgency and referral source',
      'Automatic routing to appropriate specialist and scheduling queue',
      'Complete referral lifecycle tracking with audit trail',
    ],
    metrics: [
      { value: '3 min', label: 'Referral processing' },
      { value: '100%', label: 'Referral tracking' },
      { value: '0', label: 'Lost referrals' },
    ],
    hubSubtitle: 'REFERRALS',
  },
  {
    title: 'AI Care Manager',
    role: 'Your AI Employee — Care Management',
    tagline: 'Makes 5 minutes of human review worth 25 minutes of manual work. Manages CCM, PCM, and all between-visit care programs at scale.',
    nodes: [
      { label: 'Symptom Monitoring', sub: 'CTCAE scoring' },
      { label: 'Care Plans', sub: 'Auto-generated' },
      { label: 'Staff Review Queue', sub: 'Smart routing' },
      { label: 'Billing Packets', sub: 'Audit-ready' },
      { label: 'Patient Check-ins', sub: 'AI-conducted' },
      { label: 'Program Compliance', sub: 'CMS rules' },
    ],
    stats: [
      { icon: '✓', text: '4x coordinator throughput' },
      { icon: '★', text: '$8,220/month per 100 patients' },
      { icon: '✓', text: '100% CMS-compliant billing' },
    ],
    capabilities: [
      'Automated CCM/PCM patient eligibility identification across entire panel',
      'AI-conducted structured symptom assessments and PRO scoring',
      'Clinical summary drafting with scored summaries and care plan updates',
      'Billable time tracking — separates AI time from human clinical staff time',
      'Month-end billing packet auto-assembly — audit-ready by design',
      'Staff review queue that surfaces only what needs human clinical judgment',
    ],
    metrics: [
      { value: '4x', label: 'Staff throughput' },
      { value: '$8K+', label: 'Revenue/100 patients' },
      { value: '100%', label: 'CMS compliant' },
    ],
    hubSubtitle: 'CARE MGR',
  },
  {
    title: 'AI Patient Companion',
    role: 'Your AI Employee — Sandy',
    tagline: '24/7 conversational AI that knows every patient\'s full journey — treatment history, medications, allergies, labs, appointments, and preferences.',
    nodes: [
      { label: 'Voice & SMS', sub: 'Multi-channel' },
      { label: 'Triage & Scoring', sub: 'Symptom assessment' },
      { label: 'Navigation', sub: 'Care journey guide' },
      { label: 'Survivorship', sub: 'Follow-up tracking' },
      { label: 'SDOH Screening', sub: 'Barrier resolution' },
      { label: 'Prep & Education', sub: 'Treatment info' },
    ],
    stats: [
      { icon: '✓', text: '24/7 availability with full clinical context' },
      { icon: '★', text: '91% first-call resolution rate' },
      { icon: '✓', text: '35% no-show reduction via smart reminders' },
    ],
    capabilities: [
      'Conversational AI via voice, SMS, and patient app — natural, empathetic communication',
      'Real-time symptom monitoring with CTCAE toxicity scoring',
      'Pre-appointment prep instructions and post-treatment check-ins',
      'Personalized care journey navigation with PIN billing support',
      'SDOH screening with community resource matching',
      'Survivorship care plan monitoring and surveillance scheduling',
    ],
    metrics: [
      { value: '24/7', label: 'Patient availability' },
      { value: '91%', label: 'First-call resolution' },
      { value: '<1 min', label: 'Response time' },
    ],
    hubSubtitle: 'SANDY',
  },
  {
    title: 'AI Data Analyst',
    role: 'Your AI Employee — Intelligence & Reporting',
    tagline: 'Transforms every document, data point, and trend into actionable clinical intelligence. Physicians never start from a blank page.',
    nodes: [
      { label: 'Document Ingestion', sub: 'Multi-format OCR' },
      { label: 'Clinical NLP', sub: 'Data extraction' },
      { label: 'Pre-Visit Briefs', sub: 'Intelligence reports' },
      { label: 'Predictive Models', sub: 'No-show & demand' },
      { label: 'Reporting', sub: 'Custom dashboards' },
      { label: 'Workflow Routing', sub: 'Auto-dispatch' },
    ],
    stats: [
      { icon: '✓', text: '99% extraction accuracy' },
      { icon: '★', text: 'Real-time predictive analytics' },
      { icon: '✓', text: 'Zero blank-page encounters' },
    ],
    capabilities: [
      'Multi-format document processing — faxes, PDFs, scanned images, HL7, C-CDA',
      'Clinical NLP extraction of diagnoses, medications, lab values, and procedures',
      'Pre-visit intelligence briefs with 2-week symptom trends and lab flags',
      'Predictive no-show modeling and utilization forecasting',
      'Custom report generation with natural language queries',
      'Intelligent workflow routing based on extracted data',
    ],
    metrics: [
      { value: '99%', label: 'Extraction accuracy' },
      { value: '<1 min', label: 'Processing time' },
      { value: '15+', label: 'Report types' },
    ],
    hubSubtitle: 'ANALYST',
  },
];

/* ── Additional Specialized AI Employees ──────────────── */
const additionalEmployees = [
  {
    title: 'AI Resource Optimizer',
    subtitle: 'Rooms, Equipment & Staff',
    description: 'Real-time optimization of exam rooms, procedure suites, imaging equipment, and staff assignments. Maximizes utilization and eliminates conflicts.',
    capabilities: [
      'Multi-resource orchestration across rooms, equipment, and staff',
      'Conflict detection and automatic resolution for double-bookings',
      'Utilization heatmaps and capacity planning forecasts',
      'Equipment maintenance scheduling integrated with patient workflows',
    ],
    stat: '94%',
    statLabel: 'Resource utilization rate',
    iconSvg: (
      <g>
        <rect x="3" y="8" width="9" height="14" rx="1" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <rect x="16" y="4" width="9" height="18" rx="1" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <rect x="5" y="11" width="2" height="2" rx="0.5" fill="#097C87" />
        <rect x="5" y="15" width="2" height="2" rx="0.5" fill="#097C87" className="ae-p" />
        <rect x="18" y="7" width="2" height="2" rx="0.5" fill="#097C87" />
        <rect x="18" y="11" width="2" height="2" rx="0.5" fill="#097C87" className="ae-p" />
        <rect x="18" y="15" width="2" height="2" rx="0.5" fill="#097C87" />
        <path d="M12 15 L16 15" stroke="#097C87" strokeWidth="1" strokeDasharray="2 1" className="ae-p" />
      </g>
    ),
  },
  {
    title: 'AI Infusion Room Manager',
    subtitle: 'Chair Scheduling & Flow',
    description: 'Dynamic infusion chair templates that adapt to treatment durations, nursing ratios, and patient acuity. Optimizes chair turnover and timing.',
    capabilities: [
      'Dynamic chair templates adapting to treatment durations and patient acuity',
      'Nursing ratio enforcement and workload balancing',
      'Drug prep coordination with pharmacy for just-in-time delivery',
      'Chair turnover optimization reducing wait times between patients',
    ],
    stat: '30%',
    statLabel: 'More patients per chair/day',
    iconSvg: (
      <g>
        <path d="M14 3 L14 8" stroke="#FCA47C" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="10" y="8" width="8" height="12" rx="2" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <line x1="10" y1="12" x2="18" y2="12" stroke="#FCA47C" strokeWidth="0.8" />
        <circle cx="14" cy="16" r="1.5" fill="#097C87" className="ae-p" />
        <path d="M14 20 L14 25" stroke="#097C87" strokeWidth="1" strokeDasharray="1.5 1" className="ae-p" />
        <circle cx="7" cy="6" r="2.5" fill="none" stroke="#097C87" strokeWidth="0.8" opacity="0.5" />
        <circle cx="21" cy="6" r="2.5" fill="none" stroke="#097C87" strokeWidth="0.8" opacity="0.5" />
      </g>
    ),
  },
  {
    title: 'AI Prior Auth Agent',
    subtitle: 'Authorization & Appeals',
    description: 'Automated prior authorization submission, real-time status tracking, and denial appeal generation with clinical evidence packaging.',
    capabilities: [
      'Auto-submission of prior authorizations with clinical evidence',
      'Real-time payer status tracking across all major insurers',
      'Automated denial appeal generation with supporting documentation',
      'Pre-scheduling authorization validation to prevent downstream delays',
    ],
    stat: '0',
    statLabel: 'Auth-related cancellations',
    iconSvg: (
      <g>
        <rect x="5" y="4" width="18" height="20" rx="2" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <path d="M10 13 L13 16 L19 10" fill="none" stroke="#097C87" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="ae-p" />
        <line x1="9" y1="20" x2="19" y2="20" stroke="#FCA47C" strokeWidth="0.8" />
      </g>
    ),
  },
  {
    title: 'AI SDOH Navigator',
    subtitle: 'Social Determinants & Equity',
    description: 'Automated SDOH screening (Z-codes), community resource matching, food/housing/transport referrals, and health equity gap tracking.',
    capabilities: [
      'Automated SDOH screening with Z-code documentation for billing',
      'Community resource database matching for food, housing, and transport',
      'Health equity gap analysis across patient populations',
      'Social needs referral tracking with closed-loop follow-up',
    ],
    stat: '100%',
    statLabel: 'SDOH screening completion',
    iconSvg: (
      <g>
        <circle cx="14" cy="8" r="4" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <path d="M6 22 Q6 16 14 16 Q22 16 22 22" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <path d="M10 13 L7 17" stroke="#097C87" strokeWidth="1" strokeLinecap="round" className="ae-p" />
        <path d="M18 13 L21 17" stroke="#097C87" strokeWidth="1" strokeLinecap="round" className="ae-p" />
        <circle cx="5" cy="19" r="2" fill="none" stroke="#097C87" strokeWidth="0.8" />
        <circle cx="23" cy="19" r="2" fill="none" stroke="#097C87" strokeWidth="0.8" />
      </g>
    ),
  },
  {
    title: 'AI Triage Agent',
    subtitle: 'Post-Treatment & Triage',
    description: 'AI-powered post-treatment triage with 91% first-call resolution. Automated severity assessment and intelligent escalation pathways.',
    capabilities: [
      'Symptom assessment with CTCAE toxicity grading protocols',
      'Intelligent escalation pathways based on severity and clinical rules',
      '91% first-call resolution without staff involvement',
      'Post-treatment check-in automation across voice, SMS, and portal',
    ],
    stat: '91%',
    statLabel: 'First-call resolution',
    iconSvg: (
      <g>
        <path d="M6 14 L10 14 L12 8 L16 20 L18 14 L22 14" fill="none" stroke="#097C87" strokeWidth="1.5" strokeLinecap="round" className="ae-p" />
        <circle cx="14" cy="14" r="11" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
      </g>
    ),
  },
  {
    title: 'AI Waitlist Manager',
    subtitle: 'Slot Recovery & Backfill',
    description: 'Monitors cancellations in real-time, scores waitlisted patients by urgency and fit, and fills open slots via automated outreach.',
    capabilities: [
      'Real-time cancellation monitoring with instant waitlist activation',
      'Patient scoring by clinical urgency, treatment window, and schedule fit',
      'Automated SMS and voice outreach to matched waitlist patients',
      'Same-day slot recovery with 92% fill rate for cancellations',
    ],
    stat: '92%',
    statLabel: 'Same-day cancellation fill rate',
    iconSvg: (
      <g>
        <rect x="5" y="5" width="18" height="18" rx="2" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <line x1="8" y1="10" x2="20" y2="10" stroke="#FCA47C" strokeWidth="0.8" />
        <circle cx="9" cy="15" r="1.5" fill="#097C87" className="ae-p" />
        <line x1="13" y1="15" x2="19" y2="15" stroke="#097C87" strokeWidth="1" />
        <circle cx="9" cy="19" r="1.5" fill="#097C87" opacity="0.4" />
        <line x1="13" y1="19" x2="19" y2="19" stroke="#097C87" strokeWidth="1" opacity="0.4" />
        <path d="M16 5 L22 5 L22 3 L25 7 L22 11 L22 9 L16 9" fill="none" stroke="#097C87" strokeWidth="1" className="ae-p" />
      </g>
    ),
  },
  {
    title: 'AI Survivorship Agent',
    subtitle: 'Long-Term Follow-Up',
    description: 'Automated surveillance scheduling per NCCN/ASCO guidelines. Tracks imaging, labs, and symptom check-ins across years of follow-up.',
    capabilities: [
      'Guideline-driven surveillance scheduling (NCCN, ASCO, specialty protocols)',
      'Multi-year follow-up tracking for imaging, labs, and symptom assessments',
      'Patient re-engagement for overdue surveillance appointments',
      'Zero patients lost to follow-up with automated escalation chains',
    ],
    stat: '0',
    statLabel: 'Patients lost to follow-up',
    iconSvg: (
      <g>
        <path d="M14 4 L14 10 M10 7 L14 4 L18 7" fill="none" stroke="#FCA47C" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 14 Q6 24 14 24 Q22 24 22 14" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <path d="M10 16 L13 19 L18 13" fill="none" stroke="#097C87" strokeWidth="1.5" strokeLinecap="round" className="ae-p" />
      </g>
    ),
  },
  {
    title: 'AI Staff Coordinator',
    subtitle: 'Workforce & Scheduling',
    description: 'Intelligent staff scheduling across locations, shift optimization based on patient volume forecasts, and credential-aware task assignment.',
    capabilities: [
      'Cross-location staff scheduling optimized for patient volume forecasts',
      'Credential-aware task assignment ensuring compliance',
      'Shift optimization to balance workload and reduce overtime',
      '4x coordinator throughput with automated task distribution',
    ],
    stat: '4x',
    statLabel: 'Coordinator throughput',
    iconSvg: (
      <g>
        <circle cx="10" cy="8" r="3" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <path d="M4 18 Q4 14 10 14 Q16 14 16 18" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <circle cx="19" cy="10" r="2.5" fill="none" stroke="#097C87" strokeWidth="1" className="ae-p" />
        <path d="M14 20 Q14 16 19 16 Q24 16 24 20" fill="none" stroke="#097C87" strokeWidth="1" className="ae-p" />
      </g>
    ),
  },
  {
    title: 'AI Insurance Verifier',
    subtitle: 'Eligibility & Benefits',
    description: 'Pre-visit insurance eligibility checks, benefits verification, and coverage gap detection. Prevents claim denials before they happen.',
    capabilities: [
      'Automated pre-visit eligibility verification across all major payers',
      'Benefits and coverage detail extraction for patient communication',
      'Coverage gap detection with proactive patient notification',
      '99% clean claim rate through upstream verification',
    ],
    stat: '99%',
    statLabel: 'Clean claim rate',
    iconSvg: (
      <g>
        <rect x="4" y="7" width="20" height="14" rx="2" fill="none" stroke="#FCA47C" strokeWidth="1.2" />
        <line x1="4" y1="12" x2="24" y2="12" stroke="#FCA47C" strokeWidth="1" />
        <rect x="7" y="15" width="6" height="3" rx="0.5" fill="#097C87" opacity="0.4" />
        <circle cx="20" cy="17" r="2" fill="none" stroke="#097C87" strokeWidth="1" className="ae-p" />
      </g>
    ),
  },
];

export default function AgentsPage() {
  return (
    <Box>
      <SEO
        title="AI Employees — Healthcare Virtual Assistants"
        description="Meet Configural's 14 AI employees and 30+ agents automating healthcare scheduling, care management, referral coordination, prior authorization, and patient outreach."
        keywords="healthcare AI employees, virtual healthcare assistants, AI scheduling agent, AI care manager, automated referral coordinator, healthcare automation"
      />
      {/* HERO */}
      <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 14 }, background: 'linear-gradient(135deg, #065A62 0%, #097C87 50%, #044048 100%)', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            <Chip
              label="AI Employees"
              sx={{ mb: 2, background: 'rgba(248,250,251,0.12)', border: '1px solid rgba(248,250,251,0.25)', color: '#F8FAFB', fontWeight: 500, py: 2, px: 1 }}
            />
            <Typography variant="h1" style={{ color: '#FFFFFF' }} sx={{ mb: 2 }}>
              Meet Your AI Employees
            </Typography>
            <Typography variant="body1" style={{ color: 'rgba(255,255,255,0.9)' }} sx={{ fontSize: '1.15rem', maxWidth: 720, mx: 'auto', mb: 5 }}>
              Not chatbots. Not rule engines. Autonomous AI employees that understand healthcare, coordinate with each other, and run your practice operations 24/7.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {[
                { value: '14', label: 'AI Employees' },
                { value: '30+', label: 'Specialized Agents' },
                { value: '24/7', label: 'Autonomous Operations' },
              ].map((s, i) => (
                <Grid size={{ xs: 4 }} key={i}>
                  <Typography sx={{ fontFamily: '"Cormorant Garamond Variable", serif', fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 400, color: '#FFFFFF' }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: 'rgba(248,250,251,0.7)', fontWeight: 500 }}>
                    {s.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* WHAT IS AN AI EMPLOYEE */}
      <Box sx={{ background: '#FFFFFF', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <MotionBox initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="overline" sx={{ color: '#097C87', display: 'block', mb: 2 }}>The Concept</Typography>
                <Typography variant="h2" sx={{ color: '#065A62', mb: 2 }}>
                  What is an AI Employee?
                </Typography>
                <Typography variant="body1" sx={{ color: '#065A62', mb: 3 }}>
                  An AI Employee is an autonomous digital worker that owns an entire domain of your practice operations. Unlike simple automation tools, each AI Employee:
                </Typography>
                {[
                  'Understands the full context of your practice — patients, providers, protocols, preferences',
                  'Makes independent decisions within its domain, escalating only when needed',
                  'Coordinates with other AI Employees automatically when changes cascade',
                  'Learns from your practice patterns and improves continuously',
                  'Works 24/7 without breaks, errors, or turnover',
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 1.5, mb: 1.5, alignItems: 'flex-start' }}>
                    <CheckCircleIcon sx={{ fontSize: 18, color: '#097C87', mt: 0.3, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: '#065A62' }}>{item}</Typography>
                  </Box>
                ))}
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <MotionBox initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                {/* Architecture diagram */}
                <Box sx={{ background: '#065A62', borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: '0 12px 40px rgba(6,90,98,0.2)' }}>
                  <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(248,250,251,0.4)', mb: 2 }}>
                    ai-employee-architecture
                  </Typography>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography sx={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#065A62', mb: 2 }}>
                      ┌─────────────────────────────────────────┐
                    </Typography>
                    <Typography sx={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#F8FAFB', mb: 0.5 }}>
                      {'  '}AI Employee = Domain Expert + Decision Engine
                    </Typography>
                    <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(248,250,251,0.5)', mb: 2 }}>
                      {'  '}Supported by specialized AI agents
                    </Typography>
                    <Typography sx={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#065A62', mb: 2 }}>
                      └─────────────────────────────────────────┘
                    </Typography>
                  </Box>
                  {[
                    { emp: 'AI Scheduler', agents: 'Waitlist · Slot Finder · Templates · Communication' },
                    { emp: 'AI Care Manager', agents: 'Symptom Monitor · Billing · Care Plans · Reviews' },
                    { emp: 'AI Sandy', agents: 'Triage · Navigation · SDOH · Survivorship' },
                    { emp: 'AI Data Analyst', agents: 'NLP · Briefs · Predictive Models · Reporting' },
                  ].map((row, i) => (
                    <Box key={i} sx={{ display: 'flex', gap: 2, mb: 1.5, alignItems: 'center' }}>
                      <Box sx={{ background: '#097C87', borderRadius: 1, px: 1.5, py: 0.5, minWidth: 120 }}>
                        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#F8FAFB', fontWeight: 600, whiteSpace: 'nowrap' }}>
                          {row.emp}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(248,250,251,0.5)' }}>→</Typography>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(248,250,251,0.6)' }}>
                        {row.agents}
                      </Typography>
                    </Box>
                  ))}
                  <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(248,250,251,0.1)' }}>
                    <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#2ecc71' }}>
                      ✓ Each employee coordinates autonomously with others
                    </Typography>
                    <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#2ecc71' }}>
                      ✓ Changes in one domain cascade across all employees
                    </Typography>
                    <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#2ecc71' }}>
                      ✓ Human oversight at decision boundaries only
                    </Typography>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FEATURED: AI SCHEDULER */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#097C87', display: 'block', mb: 2 }}>Featured AI Employee</Typography>
            <Typography variant="h2" sx={{ color: '#065A62', mb: 1 }}>
              {aiEmployees[0].title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#065A62', maxWidth: 700, mx: 'auto' }}>
              {aiEmployees[0].tagline}
            </Typography>
          </Box>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <HubDiagram title={aiEmployees[0].title} subtitle={aiEmployees[0].hubSubtitle} nodes={aiEmployees[0].nodes} size={360} />
                </Box>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {aiEmployees[0].capabilities.map((cap, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 1.5, mb: 1.5, alignItems: 'flex-start' }}>
                    <CheckCircleIcon sx={{ fontSize: 16, color: '#097C87', mt: 0.3, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: '#065A62' }}>{cap}</Typography>
                  </Box>
                ))}
                <Grid container spacing={2} sx={{ mt: 3 }}>
                  {aiEmployees[0].metrics.map((m, i) => (
                    <Grid size={4} key={i}>
                      <Box sx={{ textAlign: 'center', background: '#FFFFFF', borderRadius: 2, p: 2, border: '1px solid rgba(9,124,135,0.1)' }}>
                        <Typography sx={{ fontFamily: '"Cormorant Garamond Variable", serif', fontSize: '1.5rem', fontWeight: 500, color: '#097C87' }}>{m.value}</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#065A62' }}>{m.label}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </MotionBox>
            </Grid>
          </Grid>
          {/* Bottom stats bar */}
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {aiEmployees[0].stats.map((s, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', background: '#FFFFFF', borderRadius: 2, p: 2, border: '1px solid rgba(9,124,135,0.1)' }}>
                  <Box sx={{ width: 32, height: 32, borderRadius: '50%', background: i === 1 ? '#f39c12' : '#097C87', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Typography sx={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 700 }}>{s.icon}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.9rem', color: '#065A62', fontWeight: 500 }}>{s.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* OTHER AI EMPLOYEES */}
      {aiEmployees.slice(1).map((emp, idx) => (
        <Box key={emp.title} sx={{ background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFB', py: { xs: 10, md: 14 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center" direction={idx % 2 === 0 ? 'row' : 'row-reverse'}>
              <Grid size={{ xs: 12, md: 5 }}>
                <MotionBox initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <HubDiagram title={emp.title} subtitle={emp.hubSubtitle} nodes={emp.nodes} size={300} />
                  </Box>
                </MotionBox>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <MotionBox initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <Typography variant="overline" sx={{ color: '#097C87', display: 'block', mb: 1 }}>AI Employee</Typography>
                  <Typography variant="h3" sx={{ color: '#065A62', mb: 1, fontFamily: '"Cormorant Garamond Variable", serif' }}>
                    {emp.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#065A62', mb: 3 }}>
                    {emp.tagline}
                  </Typography>
                  {emp.capabilities.map((cap, i) => (
                    <Box key={i} sx={{ display: 'flex', gap: 1.5, mb: 1, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ fontSize: 14, color: '#097C87', mt: 0.4, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#065A62', fontSize: '0.88rem' }}>{cap}</Typography>
                    </Box>
                  ))}
                  <Grid container spacing={2} sx={{ mt: 3 }}>
                    {emp.metrics.map((m, i) => (
                      <Grid size={4} key={i}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography sx={{ fontFamily: '"Cormorant Garamond Variable", serif', fontSize: '1.3rem', fontWeight: 500, color: '#097C87' }}>{m.value}</Typography>
                          <Typography sx={{ fontSize: '0.72rem', color: '#065A62' }}>{m.label}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </MotionBox>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}

      {/* SPECIALIZED AI EMPLOYEES GRID */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#097C87', display: 'block', mb: 2 }}>Specialized AI Employees</Typography>
            <Typography variant="h2" sx={{ color: '#065A62', mb: 1 }}>
              The Complete AI Workforce
            </Typography>
            <Typography variant="body1" sx={{ color: '#065A62', maxWidth: 650, mx: 'auto' }}>
              Beyond our core AI employees, specialized agents handle every dimension of practice operations — from resource optimization to survivorship tracking.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {additionalEmployees.map((emp, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={emp.title}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <GlowCard delay={idx * 0.08}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mb: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '14px',
                          background: 'rgba(9,124,135,0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <svg viewBox="0 0 28 28" width="28" height="28">
                          <style>{`
                            .ae-p { animation: aeP1 2s ease-in-out infinite; }
                            @keyframes aeP1 { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
                          `}</style>
                          {emp.iconSvg}
                        </svg>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: '#065A62', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.2 }}>
                          {emp.title}
                        </Typography>
                        <Typography sx={{ color: '#097C87', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                          {emp.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#065A62', lineHeight: 1.6, mb: 2 }}>
                      {emp.description}
                    </Typography>
                    {emp.capabilities.map((cap, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1, mb: 0.75, alignItems: 'flex-start' }}>
                        <CheckCircleIcon sx={{ fontSize: 14, color: '#097C87', mt: 0.3, flexShrink: 0 }} />
                        <Typography sx={{ fontSize: '0.82rem', color: '#065A62', lineHeight: 1.5 }}>{cap}</Typography>
                      </Box>
                    ))}
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, pt: 2, mt: 2, borderTop: '1px solid rgba(9,124,135,0.1)' }}>
                      <Typography sx={{ fontFamily: '"Cormorant Garamond Variable", serif', fontSize: '1.5rem', fontWeight: 500, color: '#097C87', lineHeight: 1 }}>
                        {emp.stat}
                      </Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#065A62' }}>
                        {emp.statLabel}
                      </Typography>
                    </Box>
                  </GlowCard>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ORCHESTRATION */}
      <SectionWrapper
        overline="Orchestrated Intelligence"
        title="AI Employees Don't Work in Silos"
        subtitle="When one AI Employee detects a change, every dependent employee adapts instantly. That's an intelligent operating system for your practice."
      >
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3, background: '#FFFFFF', border: '1px solid rgba(107,163,176,0.25)', borderRadius: 4 }}>
          {[
            { trigger: 'Patient cancels infusion appointment', actions: ['AI Scheduler adjusts chair template and finds replacement', 'AI Patient Companion contacts matched waitlist patient', 'AI Waitlist Manager scores and fills the open slot', 'AI Care Manager updates care timeline'] },
            { trigger: 'New referral arrives via fax', actions: ['AI Data Analyst extracts all clinical data', 'AI Referral Coordinator matches patient and verifies insurance', 'AI Scheduler finds optimal first appointment', 'AI Patient Companion sends welcome and prep instructions'] },
            { trigger: 'Triage detects Grade 2+ toxicity', actions: ['AI Care Manager flags for immediate staff review', 'AI Data Analyst generates pre-visit intelligence brief', 'AI Triage Agent assesses severity and routes to appropriate care path', 'AI Scheduler prioritizes urgent follow-up slot'] },
          ].map((scenario, i) => (
            <Box key={i} sx={{ mb: i < 2 ? 3 : 0, pb: i < 2 ? 3 : 0, borderBottom: i < 2 ? '1px solid rgba(107,163,176,0.25)' : 'none' }}>
              <Chip label="Trigger Event" size="small" sx={{ background: 'rgba(9,124,135,0.08)', color: '#097C87', border: '1px solid rgba(9,124,135,0.2)', mb: 1, fontWeight: 500 }} />
              <Typography variant="h6" sx={{ color: '#065A62', mb: 1.5, fontFamily: '"Cormorant Garamond Variable", serif' }}>
                {scenario.trigger}
              </Typography>
              {scenario.actions.map((action, j) => (
                <Box key={j} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75, pl: 1.5 }}>
                  <ArrowRightIcon sx={{ fontSize: 18, color: '#065A62' }} />
                  <Typography variant="body2" sx={{ color: '#065A62' }}>{action}</Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </SectionWrapper>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #065A62 0%, #097C87 50%, #044048 100%)' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" style={{ color: '#F8FAFB' }} sx={{ mb: 2 }}>
            Ready to Deploy Your AI Workforce?
          </Typography>
          <Typography variant="body1" style={{ color: 'rgba(248,250,251,0.85)' }} sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            See how 14 AI Employees and 30+ specialized agents can transform your practice operations in a personalized demo.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" component={Link} to="/demo" sx={{ background: '#F8FAFB', color: '#065A62', px: 5, py: 1.8, fontWeight: 600, '&:hover': { background: '#FFFFFF' } }}>
              Book a Demo
            </Button>
            <Button variant="outlined" size="large" endIcon={<ArrowForwardIcon />} component={Link} to="/demo" sx={{ py: 1.5, px: 4, color: '#F8FAFB', borderColor: 'rgba(248,250,251,0.4)', '&:hover': { borderColor: '#F8FAFB', background: 'rgba(248,250,251,0.08)' } }}>
              See AI in Action
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
