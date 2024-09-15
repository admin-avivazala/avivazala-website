export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-09';

export const dataset = assertValue<string>(
  process.env.SANITY_STUDIO_DATASET,
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  'Ehi!! Missing environment variable: SANITY_STUDIO_DATASET'
);

export const projectId = assertValue<string>(
  process.env.SANITY_STUDIO_PROJECT_ID,
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  'Ops! Missing environment variable: SANITY_STUDIO_PROJECT_ID'
);

export const useCdn = false;

export const sanityStudioTitle = assertValue<string>(
  process.env.SANITY_STUDIO_TITLE,
  process.env.NEXT_PUBLIC_SANITY_STUDIO_TITLE ?? '',
  'Missing enviroment variable: SANITY_STUDIO_TITLE'
);

function assertValue<T>(
  mainValue: T | undefined,
  secondaryValue: T,
  errorMessage: string
): T {
  if (mainValue === undefined && secondaryValue === undefined) {
    throw new Error(errorMessage);
  }

  return mainValue ?? secondaryValue;
}
