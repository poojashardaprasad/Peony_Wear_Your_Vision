import React from 'react';
import {
  PenTool,
  Scissors,
  Truck,
  Star,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Upload,
  Plus,
  Minus,
  Info,
  Instagram,
  Facebook,
  Share2,
  Phone,
  RefreshCw,
  Menu,
  X,
  Sparkles,
  Check,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Eye,
  Heart,
  Calendar,
  Lock,
  Compass
} from 'lucide-react';

const iconMap = {
  'pen-tool': PenTool,
  'scissors': Scissors,
  'truck': Truck,
  'star': Star,
  'check-circle': CheckCircle,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'upload': Upload,
  'plus': Plus,
  'minus': Minus,
  'info': Info,
  'instagram': Instagram,
  'facebook': Facebook,
  'share-2': Share2,
  'phone': Phone,
  'refresh-cw': RefreshCw,
  'menu': Menu,
  'x': X,
  'sparkles': Sparkles,
  'check': Check,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'help-circle': HelpCircle,
  'eye': Eye,
  'heart': Heart,
  'calendar': Calendar,
  'lock': Lock,
  'compass': Compass
};

export type IconType = keyof typeof iconMap;

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconRenderer = ({ name, className = '', size = 20 }: IconRendererProps) => {
  const IconComponent = iconMap[name as IconType] || HelpCircle;
  return <IconComponent className={className} size={size} aria-hidden="true" />;
};
