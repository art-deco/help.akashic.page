/**
 * @type {import('splendid').Page}
 */
export const index = {
  title: 'Help.akashic.page',
  seo: 'The 150-160 characters search engine meta:description',
  og: {
    image: '/img/logo.jpg',
  },
  links: {
    gutenberg: 'https://www.gutenberg.org/files/84/84-h/84-h.htm',
  },
}

/**
 * @type {import('splendid').Page}
 */
export const privacy = {
  title: 'Privacy Policy',
  file: 'privacy-policy',
  seo: 'Akashic.Page Privacy Policy for processing of personal data when using comments and subscription widgets.',
  links: {
    'ico-exemption': 'https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/data-protection-fee/exemptions/',
    'lite-profile': 'https://docs.microsoft.com/en-us/linkedin/shared/references/v2/profile/lite-profile',
    'sub-bomb': 'https://www.howtogeek.com/412316/how-email-bombing-uses-spam-to-hide-an-attack/',
  },
  // seo: 'Akashic.Page Pr',
}

/**
 * A subdirectory with more pages should be exported as a
 * string constant.
 */
// export const help = '~/help'