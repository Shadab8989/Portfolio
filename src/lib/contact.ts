export const contactInfo = {
  email: "shadabkhan2020.sk@gmail.com",
  subject: "Project discussion",
  body: `Hi Shadab,

I'd like to discuss a project.

What I'm looking to build or improve:

A little about the current process:

Timeline (if known):

Thanks.`,
};

export function getFallbackMailto(): string {
  const { email, subject } = contactInfo;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export function getContactHref(): string {
  const { email, subject, body } = contactInfo;
  
  const encodedEmail = encodeURIComponent(email);
  const encodedSubject = encodeURIComponent(subject).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
  const encodedBody = encodeURIComponent(body).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");

  const mailtoUrl = `mailto:${encodedEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${encodedSubject}&body=${encodedBody}`;

  // Evaluate client-side touch detection
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
    return mailtoUrl;
  }
  
  return gmailUrl;
}
