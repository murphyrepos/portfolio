interface Testimonials {
  name: string;
  designation: string;
  review: string;
  logo?: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonials[] = [
  {
    name: 'Salman Saif',
    designation: 'Founder and CEO, CureForU',
    company: 'CureForU',
    review:
      'Working with Murphy Repos on CureForU phone app was a fantastic experience. Their creativity, technical expertise, and collaborative approach made the process seamless.  I highly recommend them.',
    logo: '/testimonials/cureforu_small.png',
    rating: 5,
  },
  {
    name: 'Alan Jaw',
    designation: 'CoFounder, NalaPrep',
    company: 'NalaPrep',
    review:
      'MurphyRepos did an exceptional job on our project! They demonstrated outstanding communication and genuine enthusiasm for our goals and requirements. They consistently asked for feedback and made sure to implement any changes we requested to perfection. I would highly recommend MurphyRepos for any future projects!',
    logo: '/testimonials/nala_prep.png',
    rating: 5,
  },
  {
    name: 'Osamad Shihab Fitoria',
    designation: 'Upwork Client, Strike Vault',
    company: 'Strike Vault',
    review:
      'It was my first time working with Murphy Repos, and they exceeded all my expectations. They communicated clearly and consistently, ensuring I was fully satisfied with every aspect of the project. I highly recommend working with Murphy Repos – you won’t be disappointed!',
    logo: '/testimonials/strike_vault.png',
    rating: 4.5,
  },
  {
    name: 'Abdullah Khan',
    designation: 'Founder, Genzonic',
    company: 'Genzonic',
    review:
      'Murphy Repos is easily one of the best companies I have had the pleasure to work with on Genzonic. They were always available, highly responsive, and maintained clear, consistent communication. They even suggested regular meetings to ensure we were aligned on the website’s development. Even after our contract ended, they remained supportive and assisted with updates and changes. I’m definitely coming back to them as we plan to upgrade the website soon!',
    rating: 5,
  },
];
