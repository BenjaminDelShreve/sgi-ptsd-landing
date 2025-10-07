import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Brain, Clock, Heart, Shield, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-serif text-foreground">Dr. Knife Chief</div>
          <Button asChild size="lg" className="rounded-full">
            <a href="mailto:allie@championsfamilyclinic.com">Book a Consultation</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative mb-12">
            <img
              src="/calming-ocean-waves-gentle-blue-water-peaceful-sea.jpg"
              alt="Calming ocean waves"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/60 rounded-3xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-balance mb-6 text-foreground leading-tight drop-shadow-lg">
                Relief from PTSD in as little as 30 minutes
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 text-balance mb-10 leading-relaxed max-w-3xl drop-shadow-md">
                Reset the fight-or-flight system and restore peace of mind
              </p>
              <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg shadow-xl">
                <a href="mailto:allie@championsfamilyclinic.com">Book a Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is PTSD Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8 text-center">What is PTSD?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Post-Traumatic Stress Disorder is a mental health condition triggered by experiencing or witnessing a
            traumatic event. It affects millions of veterans, first responders, and civilians, disrupting daily life and
            relationships.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Intrusive memories and flashbacks",
              "Nightmares and sleep disturbances",
              "Severe anxiety and hypervigilance",
              "Avoidance of trauma reminders",
              "Negative changes in mood",
              "Difficulty concentrating",
            ].map((symptom, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How SGI Works Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-16 text-center">
            How Stellate Ganglion Injection Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Reboots the Nervous System</h3>
              <p className="text-muted-foreground leading-relaxed">
                SGI targets the stellate ganglion nerve cluster in the neck, resetting the overactive fight-or-flight
                response that keeps PTSD symptoms active.
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Relief in 30 Minutes</h3>
              <p className="text-muted-foreground leading-relaxed">
                The procedure takes just minutes to perform, with many patients experiencing significant symptom relief
                within 30 minutes of treatment.
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Long-Lasting Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Benefits can last from months to years, allowing your body's natural healing processes to restore
                balance and peace of mind.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Dr. Knife Chief Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/sarah-knife-chief.png"
                alt="Dr. Knife Chief"
                className="w-full h-[400px] md:h-[600px] object-cover object-right md:object-center rounded-3xl shadow-lg"
              />
              
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-balance mb-6">Why Choose Dr. Knife Chief</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With decades of experience in regenerative medicine and a deep commitment to helping those who serve,
                Dr. Knife Chief has become a trusted name in PTSD treatment.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">85–90% Success Rate</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Consistently achieving exceptional outcomes for patients with PTSD symptoms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Natural Prolotherapy Expert</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Specializing in natural healing approaches that work with your body's own regenerative
                      capabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Office-Based Procedure</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Safe, minimally invasive treatment performed in a comfortable outpatient setting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-8 text-center">The Science Behind SGI</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Stellate Ganglion Injection is backed by rigorous research and clinical evidence, including studies
            conducted by the U.S. Department of Defense.
          </p>

          <div className="space-y-8">
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start gap-6">
                <div className="text-4xl font-serif text-primary">2008</div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Initial DoD Research</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Department of Defense begins investigating SGI as a treatment for combat-related PTSD, showing
                    promising initial results in reducing symptoms.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start gap-6">
                <div className="text-4xl font-serif text-primary">2014</div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Clinical Trials Expand</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Large-scale clinical trials demonstrate significant reduction in PTSD symptoms, with effects lasting
                    months after a single treatment.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start gap-6">
                <div className="text-4xl font-serif text-primary">2019</div>
                <div>
                  <h3 className="text-xl font-serif mb-2">PET Scan Evidence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced brain imaging studies reveal measurable changes in brain activity patterns, showing reduced
                    hyperactivity in the amygdala and improved prefrontal cortex function.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start gap-6">
                <div className="text-4xl font-serif text-primary">2023</div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Ongoing Research</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Continued studies confirm long-term efficacy and safety, with growing adoption among healthcare
                    providers treating veterans and first responders.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="p-12 border-2 border-primary/20">
              <h3 className="text-3xl md:text-4xl font-serif text-balance mb-6">Want to Read More About SGI?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Discover the complete science, history, and clinical evidence behind Stellate Ganglion Injection
                therapy.
              </p>
              <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg">
                <a href="/learn-more">Learn More</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-serif text-balance mb-6">An Important Note</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              While SGI has shown remarkable success in reducing PTSD symptoms, it is not a cure. The treatment works
              best as part of a comprehensive approach to healing.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We recommend combining SGI with ongoing therapy, counseling, and other supportive treatments to achieve
              the best long-term outcomes and sustained recovery.
            </p>
          </Card>
        </div>
      </section>

      {/* Veterans & First Responders Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-12 text-center">Serving Those Who Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/military-veterans-support-group-healing.jpg"
              alt="Veterans support"
              className="w-full h-[400px] object-cover rounded-3xl"
            />
            <img
              src="/first-responders-firefighters-paramedics-police.jpg"
              alt="First responders"
              className="w-full h-[400px] object-cover rounded-3xl"
            />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mt-12 text-center max-w-3xl mx-auto">
            We are honored to provide care for veterans, active military personnel, and first responders who have
            dedicated their lives to protecting others. Your service matters, and so does your healing.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-balance mb-8 leading-tight">
            Reclaim Your Life from PTSD
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 text-balance mb-12 leading-relaxed">
            Take the first step toward lasting relief and restored peace of mind
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8 py-6 text-base font-medium">
            <a href="mailto:allie@championsfamilyclinic.com">Book Consultation</a>
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
              <h4 className="font-serif mb-4">Contact - Petty Medical</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Phone: <a href="tel:+14792541005" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">(479) 254-1005</a>
                <br />
                Email: <a href="mailto:allie@championsfamilyclinic.com" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">allie@championsfamilyclinic.com</a>
                <br />
                Website: <a href="https://pettymedical.com" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">pettymedical.com</a>
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
