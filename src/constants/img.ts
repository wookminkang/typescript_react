import garlicImage from '../assets/images/garlic.svg';
import broccoliImage from '../assets/images/broccoli.svg';
import potatoImage from '../assets/images/potato.svg';
import eggImage from '../assets/images/egg.svg';
import shrimpImage from '../assets/images/shrimp.svg';
import anchovyImage from '../assets/images/anchovy.svg';
import breadImage from '../assets/images/bread.svg';
import steakImage from '../assets/images/steak.svg';
import mushroomImage from '../assets/images/mushroom.svg';
import avocadoImage from '../assets/images/avocado.svg';
import carrotImage from '../assets/images/carrot.svg';
import cheeseImage from '../assets/images/cheese.svg';
import pumpkinImage from '../assets/images/pumpkin.svg';
import milkImage from '../assets/images/milk.svg';
import cornerImage from '../assets/images/corner.svg';
import lemonImage from '../assets/images/lemon.svg';
import pepperImage from '../assets/images/pepper.svg';
import greenonionImage from '../assets/images/greenonion.svg';

interface ListItem {
  name: string;
  image: string;
  date: string;
}

export const INGREDIENTS: ListItem[] = [
  {
    name: '마늘',
    image: garlicImage,
    date: '2025-01-01',
  },
  {
    name: '브로콜리',
    image: broccoliImage,
    date: '2025-01-01',
  },
  {
    name: '감자',
    image: potatoImage,
    date: '2025-01-01',
  },
  {
    name: '계란',
    image: eggImage,
    date: '2025-01-01',
  },
  {
    name: '새우',
    image: shrimpImage,
    date: '2025-01-01',
  },
  {
    name: '멸치',
    image: anchovyImage,
    date: '2025-01-01',
  },
  {
    name: '빵',
    image: breadImage,
    date: '2025-01-01',
  },
  {
    name: '스테이크',
    image: steakImage,
    date: '2025-01-01',
  },
  {
    name: '버섯',
    image: mushroomImage,
    date: '2025-01-01',
  },
  {
    name: '아보카도',
    image: avocadoImage,
    date: '2025-01-01',
  },
  {
    name: '당근',
    image: carrotImage,
    date: '2025-01-01',
  },
  {
    name: '치즈',
    image: cheeseImage,
    date: '2025-01-01',
  },
  {
    name: '호박',
    image: pumpkinImage,
    date: '2025-01-01',
  },
  {
    name: '우유',
    image: milkImage,
    date: '2025-01-01',
  },
  {
    name: '옥수수',
    image: cornerImage,
    date: '2025-01-01',
  },
  {
    name: '레몬',
    image: lemonImage,
    date: '2025-01-01',
  },
  {
    name: '고추',
    image: pepperImage,
    date: '2025-01-01',
  },
  {
    name: '대파',
    image: greenonionImage,
    date: '2025-01-01',
  },
];
