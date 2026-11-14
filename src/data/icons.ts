import arrowDownToLine from 'lucide-static/icons/arrow-down-to-line.svg?raw';
import arrowLeftRight from 'lucide-static/icons/arrow-left-right.svg?raw';
import arrowRight from 'lucide-static/icons/arrow-right.svg?raw';
import badgeCheck from 'lucide-static/icons/badge-check.svg?raw';
import bellRing from 'lucide-static/icons/bell-ring.svg?raw';
import briefcase from 'lucide-static/icons/briefcase.svg?raw';
import chevronDown from 'lucide-static/icons/chevron-down.svg?raw';
import circleCheck from 'lucide-static/icons/circle-check.svg?raw';
import handCoins from 'lucide-static/icons/hand-coins.svg?raw';
import headset from 'lucide-static/icons/headset.svg?raw';
import idCard from 'lucide-static/icons/id-card.svg?raw';
import keyRound from 'lucide-static/icons/key-round.svg?raw';
import lock from 'lucide-static/icons/lock.svg?raw';
import messageCircle from 'lucide-static/icons/message-circle.svg?raw';
import messageCircleOff from 'lucide-static/icons/message-circle-off.svg?raw';
import percent from 'lucide-static/icons/percent.svg?raw';
import plane from 'lucide-static/icons/plane.svg?raw';
import receipt from 'lucide-static/icons/receipt.svg?raw';
import shieldCheck from 'lucide-static/icons/shield-check.svg?raw';
import smartphone from 'lucide-static/icons/smartphone.svg?raw';
import store from 'lucide-static/icons/store.svg?raw';
import userCheck from 'lucide-static/icons/user-check.svg?raw';
import wallet from 'lucide-static/icons/wallet.svg?raw';

/** Lucide icons (ISC license), inlined as SVG. The same family as the demo site. */
export const ICONS = {
  'arrow-down-to-line': arrowDownToLine,
  'arrow-left-right': arrowLeftRight,
  'arrow-right': arrowRight,
  'badge-check': badgeCheck,
  'bell-ring': bellRing,
  briefcase,
  'chevron-down': chevronDown,
  'circle-check': circleCheck,
  'hand-coins': handCoins,
  headset,
  'id-card': idCard,
  'key-round': keyRound,
  lock,
  'message-circle': messageCircle,
  'message-circle-off': messageCircleOff,
  percent,
  plane,
  receipt,
  'shield-check': shieldCheck,
  smartphone,
  store,
  'user-check': userCheck,
  wallet,
} as const;

export type IconName = keyof typeof ICONS;
