export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-background container mx-auto max-w-5xl text-center md:text-left"
    >
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-semibold">
            Full-Stack Developer | From Internship to Bootcamp to Production.
          </h3>
          <p className="text-muted-foreground">
            I'm a Full-Stack Developer based in Morocco.
          </p>
          <p className="text-muted-foreground">
            I started at the Court of Appeal of Guelmim building internal tools
            used by real employees — then pushed further through the Orange x
            JobInTech bootcamp where I delivered a full platform deployed on AWS
            as part of a 3-person team.
          </p>
          <p className="text-muted-foreground">
            I learn what I need to learn, I ship what I build, and I'm always
            looking to go further than what's asked of me.
          </p>
        </div>
      </div>
    </section>
  );
};
