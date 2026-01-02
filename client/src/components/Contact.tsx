import {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { useToast } from "../hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [sendingDots, setSendingDots] = useState(1);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
  if (!form.formState.isSubmitting) {
    setSendingDots(1);
    return;
  }
  const interval = setInterval(() => {
    setSendingDots((prev) => (prev % 3) + 1);
  }, 500);
  return () => clearInterval(interval);
}, [form.formState.isSubmitting]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("https://formspree.io/f/myzrvjej", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast({
          title: "Message sent 🚀",
          description:
            "Thank you for reaching out. I'll get back to you shortly.",
        });
        form.reset();
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
  }

  const isSubmitting = form.formState.isSubmitting;

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Initialize Connection
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to start your next project? Drop me a line and let's create
            something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <Card className="glass-card border-l-4 border-l-primary">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Email</h3>
                    <p className="text-muted-foreground font-mono">
                      mohammad.c.syed@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-secondary">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Phone</h3>
                    <p className="text-muted-foreground font-mono">
                      +91 9494213141
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-purple-500">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Location</h3>
                    <p className="text-muted-foreground font-mono">
                      Bengaluru, IN
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="bg-background/50 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          {...field}
                          className="bg-background/50 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          {...field}
                          className="bg-background/50 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 min-h-[120px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
                >
                  {form.formState.isSubmitting
                    ? `Sending Message${".".repeat(sendingDots)}`
                    : "Send Message 🚀"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
