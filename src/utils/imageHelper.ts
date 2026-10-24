import { CategoryData } from '../context/DesignContext';
import shortDressesImageNew from '../assets/images/regenerated_image_1784646459032.jpg';
import coordSetsImageNew from '../assets/images/regenerated_image_1784647574372.jpg';
import jumpsuitsImageNew from '../assets/images/regenerated_image_1784647736478.webp';
import skirtsImageNew from '../assets/images/regenerated_image_1785323859484.png';
import topsImageNew from '../assets/images/regenerated_image_1784648361046.jpg';
import maxiDressesImageNew from '../assets/images/regenerated_image_1784648561757.jpg';
import shortsImageNew from '../assets/images/regenerated_image_1784648695771.jpg';
import pantsImageNew from '../assets/images/regenerated_image_1784648787448.webp';

export const getCategoryImage = (category: CategoryData | null | undefined): string => {
  if (!category || !category.images || category.images.length === 0) {
    return 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80';
  }
  
  if (category.gender === 'Male') {
    return category.images[0];
  }
  
  switch (category.id) {
    case 'maxi-dresses':
      return maxiDressesImageNew;
    case 'short-dresses':
      return shortDressesImageNew;
    case 'coord-sets':
      return coordSetsImageNew;
    case 'jumpsuits':
      return jumpsuitsImageNew;
    case 'skirts':
      return skirtsImageNew;
    case 'tops':
      return topsImageNew;
    case 'shorts':
      return shortsImageNew;
    case 'pants':
      return pantsImageNew;
    default:
      return category.images[0]; // Use first image for all other categories
  }
};

export const getCategoryObjectFit = (category: CategoryData | null | undefined): string => {
  if (!category) return 'object-cover object-center';
  
  switch (category.id) {
    case 'short-dresses':
      // Shift the image higher up within its container to show more of the dress bottom
      return 'object-cover object-[center_75%]';
    case 'maxi-dresses':
      // Shift the maxi dress image up so that the whole outfit is visible
      return 'object-cover object-[center_75%]';
    case 'coord-sets':
      return 'object-cover object-[center_45%] scale-[1.35] origin-bottom';
    case 'jumpsuits':
      // Shift the jumpsuit image up so that the whole outfit is visible
      return 'object-cover object-[center_70%]';
    case 'skirts':
      // Shift the skirt image up to make sure the full outfit is visible
      return 'object-cover object-[center_70%]';
    case 'shorts':
      // Shift the shorts image slightly to center the model's outfit perfectly
      return 'object-cover object-[center_65%]';
    case 'pants':
      // Shift the pants image slightly up so that the pants are fully visible
      return 'object-cover object-[center_65%]';
    default:
      return 'object-cover object-center';
  }
};

