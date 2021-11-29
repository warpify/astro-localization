// TODO: Improve to get automatically all files in localization folder
// import fs from 'node:fs/promises';
import it from '../data/localization/it.json';
import en from '../data/localization/en.json';

export function getLocalizationMap() {
	let localizations = {
		it: it,
		en: en
	};
	return localizations;
}
  