import { ConvertUnionToTuple } from '../utils';

export const CATEGORIES_TYPES = [
  'food',
  'house',
  'education',
  'taxes',
  'leisure',
  'other expenses',
  'income',
  'health',
  'uncategorized',
  'transportation',
] as const;

export const CATEGORIES_TYPES_DICTIONARY = {
  food: 'Alimentação',
  house: 'Casa',
  education: 'Educação',
  taxes: 'Impostos',
  leisure: 'Lazer',
  'other expenses': 'Outros Gastos',
  income: 'Receita',
  health: 'Saúde',
  uncategorized: 'Sem Categoria',
  transportation: 'Transporte',
} as const;

export const CATEGORIES_TYPES_DICTIONARY_MAP = {
  Alimentação: 'food',
  Casa: 'house',
  Educação: 'education',
  Impostos: 'taxes',
  Lazer: 'leisure',
  'Outros Gastos': 'other expenses',
  Receita: 'income',
  Saúde: 'health',
  'Sem Categoria': 'uncategorized',
  Transporte: 'transportation',
} as const;

export const CATEGORIES_TYPES_DICTIONARY_VALUES = Object.values(
  CATEGORIES_TYPES_DICTIONARY
) as CategoryTypeDictionaryValues;

export type CategoryOptions = typeof CATEGORIES_TYPES;
export type CategoryType = (typeof CATEGORIES_TYPES)[number];
export type CategoryTypeDictionary = typeof CATEGORIES_TYPES_DICTIONARY;
export type CategoryTypeDictionaryKey = keyof CategoryTypeDictionary;
export type CategoryTypeDictionaryValues = ConvertUnionToTuple<CategoryTypeDictionary[CategoryTypeDictionaryKey]>;
export type CategoryTypeDictionaryValue = CategoryTypeDictionaryValues[number];
