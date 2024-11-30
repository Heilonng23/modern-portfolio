"use client";

import { Github, Mail, MapPin, FileText } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

// Assuming these imports are correct
import demoPeazeful from "@app/demoPeazeful.png";
import demoHeaven from "@app/demoHeaven.png";
import demoAlgorithm from "@app/demoAlgorithm.png";
import demoAskToMe from "@app/demoAskToMe.png";

const AnimatedCursor = () => {
   const cursorX = useMotionValue(-100);
   const cursorY = useMotionValue(-100);

   const springConfig = { damping: 25, stiffness: 700 };
   const cursorXSpring = useSpring(cursorX, springConfig);
   const cursorYSpring = useSpring(cursorY, springConfig);

   useEffect(() => {
      const moveCursor = (e: MouseEvent) => {
         cursorX.set(e.clientX - 16);
         cursorY.set(e.clientY - 16);
      };

      window.addEventListener("mousemove", moveCursor);

      return () => {
         window.removeEventListener("mousemove", moveCursor);
      };
   }, [cursorX, cursorY]);

   return (
      <motion.div
         className="pointer-events-none fixed inset-0 z-50 mix-blend-difference"
         style={{
            x: cursorXSpring,
            y: cursorYSpring,
         }}
      >
         <div className="h-8 w-8 rounded-full bg-primary opacity-50" />
      </motion.div>
   );
};

export default function Component() {
   const [activeTab, setActiveTab] = useState("work");

   return (
      <div className="relative min-h-screen bg-background text-foreground">
         {/* Background div */}
         <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

         {/* Content div - Add relative and z-10 to keep it above background */}
         <div className="relative z-10 mx-auto w-full px-4 py-8 md:max-w-[60%] md:py-16">
            <AnimatedCursor />
            {/* Header Section */}
            <motion.header
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="mb-8 md:mb-16"
            >
               <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                     IBRAGIM IBRAGIMOV
                  </h1>
                  <h2 className="text-xl md:text-2xl text-muted-foreground">Software Engineer</h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                     <MapPin className="h-4 w-4" />
                     <span>Warsaw, Poland</span>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Button variant="outline" size="sm" asChild className="w-full md:w-auto">
                        <Link
                           href="https://drive.google.com/file/d/1rG3VJECOoFDRYL9o8XBKD8Bx0Mzx9qk-/view?usp=sharing"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FileText className="h-4 w-4 mr-2" />
                           View Resume
                        </Link>
                     </Button>
                     <Button variant="outline" size="sm" asChild className="w-full md:w-auto">
                        <Link href="mailto:ibrahimov.ibrahm@gmail.com">
                           <div className="flex items-center">
                              <Mail className="h-4 w-4" />
                              <span className="ml-2">ibrahimov.ibrahm@gmail.com</span>
                           </div>
                        </Link>
                     </Button>

                     <Button variant="outline" size="sm" asChild className="w-full md:w-auto">
                        <Link href="https://github.com/Heilonng23" target="_blank">
                           <Github className="h-4 w-4" />
                           <span className="ml-2"> @Heilonng23 </span>
                        </Link>
                     </Button>
                  </div>
               </div>
            </motion.header>

            <main>
               {/* Experience and Education Section */}
               <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8 md:mb-16"
               >
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                     <TabsList className="mb-4 md:mb-8 w-full justify-center rounded-xl">
                        <TabsTrigger value="work" className="flex-1  rounded-xl">
                           Work Experience
                        </TabsTrigger>
                        <TabsTrigger value="education" className="flex-1  rounded-xl">
                           Education
                        </TabsTrigger>
                     </TabsList>
                     <TabsContent value="work">
                        <div className="space-y-4 md:space-y-8">
                           <Card>
                              <CardHeader>
                                 <CardTitle className="text-lg md:text-xl">
                                    Junior Software Engineer
                                 </CardTitle>
                                 <div className="text-xs md:text-sm text-muted-foreground">
                                    Sinus.ge / E-amahh • 2023 October - Present
                                 </div>
                              </CardHeader>
                              <CardContent className="space-y-2 text-sm md:text-base">
                                 <ul className="list-disc list-inside space-y-2">
                                    <li>
                                       Use{" "}
                                       <strong className="bg-white text-secondary">React</strong>.
                                       to build and maintain web applications.
                                    </li>
                                    <li className="text-base">
                                       Utilize{" "}
                                       <strong className="bg-white text-secondary">
                                          TypeScript
                                       </strong>{" "}
                                       for type-safe code and enhanced development experience.
                                    </li>
                                    <li>
                                       Implement{" "}
                                       <strong className="bg-white text-secondary">Next.js</strong>{" "}
                                       for server-side rendering and optimized performance.to build
                                       and maintain web applications.
                                    </li>
                                    <li>
                                       Develop and maintain scalable and efficient backend services
                                       using{" "}
                                       <strong className="bg-white text-secondary">Java</strong>.
                                    </li>
                                    <li>
                                       Design and optimize database schemas and queries for
                                       <strong className="bg-white text-secondary">MySQL</strong>.
                                    </li>
                                    <li>
                                       Implement{" "}
                                       <strong className="bg-white text-secondary">
                                          RESTful APis
                                       </strong>
                                       . and integrate with frontend applications.
                                    </li>
                                 </ul>
                              </CardContent>
                           </Card>
                           <Card>
                              <CardHeader>
                                 <CardTitle className="text-lg md:text-xl">
                                    Software Engineer Intern - Team Lead for Final Project
                                 </CardTitle>
                                 <div className="text-xs md:text-sm text-muted-foreground">
                                    Polish-Japanese Academy of Technology
                                 </div>
                              </CardHeader>
                              <CardContent className="space-y-2 text-sm md:text-base">
                                 <ul className="list-disc list-inside space-y-2">
                                    <li>
                                       Develop a project management tool using{" "}
                                       <strong className="bg-white text-secondary">React</strong>{" "}
                                       for the frontend.
                                    </li>
                                    <li>
                                       Create a{" "}
                                       <strong className="bg-white text-secondary">
                                          Java-based RESTful API
                                       </strong>{" "}
                                       backend for secure data handling.
                                    </li>
                                    <li>
                                       Utilize{" "}
                                       <strong className="bg-white text-secondary">MySQL</strong>{" "}
                                       for efficient data storage and retrieval.
                                    </li>
                                    <li>
                                       Implement user authentication with{" "}
                                       <strong className="bg-white text-secondary">JWT</strong> for
                                       secure access.
                                    </li>
                                    <li>
                                       Deploy on{" "}
                                       <strong className="bg-white text-secondary">AWS</strong> with{" "}
                                       <strong className="bg-white text-secondary">CI/CD</strong>{" "}
                                       for automated testing and deployment.
                                    </li>
                                 </ul>
                              </CardContent>
                           </Card>
                        </div>
                     </TabsContent>
                     <TabsContent value="education">
                        <div className="space-y-4 md:space-y-8">
                           <Card>
                              <CardHeader>
                                 <CardTitle className="text-lg md:text-xl">
                                    Bachelor&apos;s Degree in Business Management
                                 </CardTitle>
                                 <div className="text-xs md:text-sm text-muted-foreground">
                                    Vistula University
                                 </div>
                              </CardHeader>
                           </Card>
                           <Card>
                              <CardHeader>
                                 <CardTitle className="text-lg md:text-xl">
                                    Bachelor&apos;s Degree in Computer Science
                                 </CardTitle>
                                 <div className="text-xs md:text-sm text-muted-foreground">
                                    Polish-Japanese Academy of Information Technology
                                 </div>
                              </CardHeader>
                           </Card>
                        </div>
                     </TabsContent>
                  </Tabs>
               </motion.section>

               {/* Skills Section */}
               <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-8 md:mb-16"
               >
                  <h2 className="mb-4 md:mb-8 text-xl md:text-2xl font-semibold">Skills</h2>
                  <div className="space-y-4 md:space-y-8">
                     <div>
                        <h3 className="mb-2 text-base md:text-lg font-medium">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="secondary">React</Badge>
                           <Badge variant="secondary">Next.js</Badge>
                           <Badge variant="secondary">TypeScript</Badge>
                           <Badge variant="secondary">Redux</Badge>
                           <Badge variant="secondary">CSS3</Badge>
                           <Badge variant="secondary">Bootstrap</Badge>
                           <Badge variant="secondary">D3.js</Badge>
                        </div>
                     </div>
                     <div>
                        <h3 className="mb-2 text-base md:text-lg font-medium">
                           Backend & Database
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="secondary">Java</Badge>
                           <Badge variant="secondary">Python</Badge>
                           <Badge variant="secondary">Spring Boot</Badge>
                           <Badge variant="secondary">PostgreSQL</Badge>
                           <Badge variant="secondary">RESTful APIs</Badge>
                           <Badge variant="secondary">Hibernate ORM</Badge>
                        </div>
                     </div>
                     <div>
                        <h3 className="mb-2 text-base md:text-lg font-medium">Other Skills</h3>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="secondary">AWS Lambda</Badge>
                           <Badge variant="secondary">AWS Kinesis</Badge>
                           <Badge variant="secondary">Redis</Badge>
                           <Badge variant="secondary">Git</Badge>
                           <Badge variant="secondary">Agile</Badge>
                        </div>
                     </div>
                  </div>
               </motion.section>

               {/* Projects Section */}
               <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
               >
                  <h2 className="mb-4 md:mb-8 text-xl md:text-2xl font-semibold">Projects</h2>
                  <div className="grid gap-8 md:grid-cols-2">
                     <Card className="overflow-hidden">
                        <CardHeader>
                           <CardTitle className="text-lg md:text-xl">Peazeful</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                           <Link
                              href="https://peazeful.com"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Image
                                 src={demoPeazeful}
                                 alt="Peazeful"
                                 className="w-full h-48 object-cover"
                              />
                           </Link>
                           <div className="p-4 space-y-4">
                              <p className="text-xs md:text-sm text-muted-foreground">
                                 A micro SaaS app helping people to journal consistently for 5
                                 minutes a day with various templates and data statistics.
                              </p>
                              <div>
                                 <h4 className="text-xs md:text-sm font-semibold mb-2">
                                    Tech Stack:
                                 </h4>
                                 <div className="flex flex-wrap gap-2">
                                    <Badge>Next.js</Badge>
                                    <Badge>React</Badge>
                                    <Badge>TypeScript</Badge>
                                    <Badge>Supabase</Badge>
                                    <Badge>Tailwind CSS</Badge>
                                 </div>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                     <Card className="overflow-hidden">
                        <CardHeader>
                           <CardTitle className="text-lg md:text-xl">Fiction Heaven</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                           <Link
                              href="https://fictionheavenio.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Image
                                 src={demoHeaven}
                                 alt="Fiction Heaven"
                                 className="w-full h-48 object-cover"
                              />
                           </Link>
                           <div className="p-4 space-y-4">
                              <p className="text-xs md:text-sm text-muted-foreground">
                                 A platform where you can search for movies and TV series, rate
                                 them, and save your ratings.
                              </p>
                              <div>
                                 <h4 className="text-xs md:text-sm font-semibold mb-2">
                                    Tech Stack:
                                 </h4>
                                 <div className="flex flex-wrap gap-2">
                                    <Badge>React</Badge>
                                    <Badge>TypeScript</Badge>
                                    <Badge>Supabase</Badge>
                                    <Badge>Tailwind CSS</Badge>
                                 </div>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                     <Card className="overflow-hidden">
                        <CardHeader>
                           <CardTitle className="text-lg md:text-xl">
                              Algorithm Visualization
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                           <Link
                              href="https://path-finder-algorithm.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Image
                                 src={demoAlgorithm}
                                 alt="Project Three"
                                 className="w-full h-48 object-cover"
                              />
                           </Link>
                           <div className="p-4 space-y-4">
                              <p className="text-xs md:text-sm text-muted-foreground">
                                 Algorithm visualization for Depth First and Breadth First
                                 algorithms, built with React, TypeScript, and Tailwind CSS.
                              </p>
                              <div>
                                 <h4 className="text-xs md:text-sm font-semibold mb-2">
                                    Tech Stack:
                                 </h4>
                                 <div className="flex flex-wrap gap-2">
                                    <Badge>React</Badge>
                                    <Badge>TypeScript</Badge>
                                    <Badge>Tailwind CSS</Badge>
                                 </div>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                     <Card className="overflow-hidden">
                        <CardHeader>
                           <CardTitle className="text-lg md:text-xl">AskToMe Ai bot</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                           <Link
                              href="https://asktome-iota.vercel.app/https:/en.wikipedia.org/wiki/Donald_Trump"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Image
                                 src={demoAskToMe}
                                 alt="Project Four"
                                 className="w-full h-48 object-cover"
                              />
                           </Link>
                           <div className="p-4 space-y-4">
                              <p className="text-xs md:text-sm text-muted-foreground">
                                 This AI chatbot lets you talk with the page you&apos;re in.
                              </p>
                              <div>
                                 <h4 className="text-xs md:text-sm font-semibold mb-2">
                                    Tech Stack:
                                 </h4>
                                 <div className="flex flex-wrap gap-2">
                                    <Badge>Next.js</Badge>
                                    <Badge>TypeScript</Badge>
                                    <Badge>OpenAI</Badge>
                                    <Badge>ChatGPT</Badge>
                                    <Badge>Tailwind CSS</Badge>
                                 </div>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </motion.section>
            </main>
         </div>
      </div>
   );
}
