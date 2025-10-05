import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LearnMore() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-serif text-foreground flex items-center gap-2 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Dr. Knife Chief
          </Link>
          <Button size="lg" className="rounded-full">
            Book a Consultation
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-balance mb-6 leading-tight">
            Stellate Ganglion Injection (SGI) for PTSD Relief
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
            A Breakthrough in Rapid, Natural Nervous System Resetting
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-foreground leading-relaxed">
            At Petty Medical, we offer a pioneering approach to treating Post-Traumatic Stress Disorder (PTSD) by
            focusing not just on symptoms, but on the biological root cause — the overactive "fight-or-flight" system.
            The Stellate Ganglion Injection (SGI) is a natural, non-pharmaceutical treatment that may begin relieving
            PTSD symptoms in as little as 30 minutes and can provide long-term relief lasting months or even years.
          </p>
        </div>
      </section>

      {/* What Is PTSD */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8">What Is PTSD — and How Does SGI Help?</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              PTSD is a biological response to overwhelming trauma — including combat, sexual assault, or severe injury.
              Sufferers may experience nightmares, hyper-vigilance, anxiety, insomnia, and emotional reactivity.
            </p>
            <p>
              At the core of PTSD lies the sympathetic nervous system, responsible for the body's stress response. After
              trauma, this system can become "stuck on," causing persistent elevated levels of norepinephrine (a stress
              hormone) and abnormal nerve growth that overstimulates the amygdala — the brain's fear center.
            </p>
            <p>
              The Stellate Ganglion, a cluster of sympathetic nerves in the neck, acts like a switch for this overactive
              system. By gently injecting a natural prolotherapy solution around the stellate ganglion, we can "reboot"
              the system — returning it to a calmer, pre-trauma state. This is the core mechanism of the Stellate
              Ganglion Injection (SGI).
            </p>
          </div>
        </div>
      </section>

      {/* Dr. Knife Chief's Technique */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8">
            How Dr. Knife Chief Has Refined the Technique
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              While traditional Stellate Ganglion Blocks (SGBs) use lidocaine to temporarily numb the nerves, Dr. Knife
              Chief has advanced the technique using a proprietary, medication-free prolotherapy mixture. This natural
              biologic approach both calms the nerves and nourishes them for progressive healing.
            </p>
            <p className="font-medium text-foreground">Her protocol is designed to be:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Minimally invasive",
              "Performed in-office",
              "Free from pharmaceuticals",
              "Supported by years of clinical success",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Over 9 years, her modified SGI technique has consistently shown 85–90% success rates in reducing PTSD
            symptoms — a significant improvement over traditional psychiatric treatments that often take months or years
            and succeed less than 40% of the time.
          </p>
        </div>
      </section>

      {/* Backed by Science */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8">Backed by Science and Military Use</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              SGBs gained traction after a pivotal 2008 publication in The Annals of Clinical Psychiatry. Since then,
              institutions such as Walter Reed, San Diego Naval Hospital, and the Long Beach VA have implemented the
              technique for PTSD treatment.
            </p>
            <p>
              One VA study demonstrated, via PET scans, a direct deactivation of the amygdala within days of treatment.
              The U.S. Department of Defense followed with a 3-year, $2 million clinical trial involving over 240
              active-duty personnel.
            </p>
          </div>
        </div>
      </section>

      {/* Is SGI a Cure */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8">Is SGI a Cure for PTSD?</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              While not a cure, SGI often provides profound symptom relief. Some patients experience long-term results —
              including one soldier still thriving 10 years after treatment.
            </p>
            <p className="font-medium text-foreground">That said, SGI works best when paired with:</p>
          </div>
          <div className="space-y-4 mb-10">
            {[
              "Aftercare and therapy (like CBT)",
              "Stress-reduction techniques (e.g., meditation)",
              "Commitment to healing and follow-up",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In cases of additional trauma or genetic sensitivity to stress, symptoms may return — but a repeat SGI is
            often just as effective.
          </p>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8">Conditions Treated with SGIs</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            While best known for PTSD treatment, SGIs are also effective in addressing:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Complex Regional Pain Syndrome (CRPS) / Reflex Sympathetic Dystrophy (RSD)",
              "Peripheral vascular disease",
              "Phantom limb pain & nerve injuries",
              "Post-herpetic neuralgia",
              "Anxiety disorders & Long COVID symptoms",
            ].map((condition, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8">Benefits of Stellate Ganglion Injection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Fast-acting relief (often in 30 minutes)",
              "Long-lasting effects (months to years)",
              "Reduces PTSD symptoms like hypervigilance, anxiety, and insomnia",
              "Improves circulation and nerve function",
              "Minimally invasive, medication-free, and well-tolerated",
              "Can be repeated if necessary",
            ].map((benefit, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8">Bottom Line</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The Stellate Ganglion Injection is a safe, fast, and natural method for calming an overactive nervous
              system. It is not a cure, but it is a powerful tool in the treatment of PTSD and other stress-related or
              pain-based conditions.
            </p>
            <p>
              Whether you're a veteran, first responder, trauma survivor, or someone dealing with anxiety, SGI offers a
              promising new path toward lasting relief and nervous system restoration — without the need for drugs or
              surgery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8 leading-tight">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-balance mb-10 leading-relaxed">
            Schedule a consultation with Dr. Knife Chief to learn if SGI is right for you
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-12 py-7 text-lg font-medium">
            Book a Consultation Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Dr. Knife Chief</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Providing compassionate, evidence-based PTSD treatment through Stellate Ganglion Injection.
              </p>
            </div>
            <div>
              <h4 className="font-serif mb-4">Contact</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Phone: (479) 254-1055
                <br />
                Email: allie@championsfamilyclinic.com
              </p>
            </div>
            <div>
              <h4 className="font-serif mb-4">Hours</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Monday - Thursday: 9am - 5pm
                <br />
                Friday: 9am - 4pm
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
            © 2025 Dr. Knife Chief. All rights reserved. • Privacy Policy • Terms of Service
          </div>
        </div>
      </footer>
    </main>
  )
}
