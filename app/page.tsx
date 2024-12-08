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
                  <h2 className="text-xl md:text-2xl text-muted-foreground">Project Manager</h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                     <MapPin className="h-4 w-4" />
                     <span>Warsaw, Poland</span>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Button variant="outline" size="sm" asChild className="w-full md:w-auto">
                        <Link href="tel:+48692743171">
                           <div className="flex items-center">
                              <span className="ml-2 text-[16px]">+48 692 743 171</span>
                           </div>
                        </Link>
                     </Button>
                     <Button variant="outline" size="sm" asChild className="w-full md:w-auto">
                        <Link href="mailto:ibrahimov.ibrahm@gmail.com">
                           <div className="flex items-center">
                              <Mail className="h-4 w-4" />
                              <span className="ml-2 text-[16px]">ibrahimov.ibrahm@gmail.com</span>
                           </div>
                        </Link>
                     </Button>
                     <Button variant="outline" size="sm" asChild className="w-full md:w-auto">
                        <Link
                           href="https://www.linkedin.com/in/ibragim-ibragimov-1b606024b/"
                           target="_blank"
                        >
                           <span className="ml-2 text-[16px]">LinkedIn</span>
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
                                 {" "}
                                 <CardTitle className="text-lg md:text-xl">
                                    IT Project Manager
                                 </CardTitle>
                                 <div className="text-xs md:text-sm text-muted-foreground">
                                    Sinus Technology • 2023 - Present
                                 </div>
                              </CardHeader>
                              <CardContent className="space-y-2 text-sm md:text-base">
                                 <ul className="list-disc list-inside space-y-2">
                                    <li>
                                       Lead and manage multiple cross-functional teams to deliver
                                       web-based applications using{" "}
                                       <span className="bg-destructive">React</span>,{" "}
                                       <span className="bg-destructive">Next.js</span>, and{" "}
                                       <span className="bg-destructive">TypeScript</span>.
                                    </li>
                                    <li>
                                       Developed detailed project plans, managed timelines, and
                                       tracked progress using tools like{" "}
                                       <span className="bg-destructive">Jira</span> and{" "}
                                       <span className="bg-destructive">Trello</span>.
                                    </li>
                                    <li>
                                       Conducted regular stakeholder meetings to gather
                                       requirements, provide updates, and manage expectations.
                                    </li>
                                    <li>
                                       Optimized resource allocation and managed budgets to ensure
                                       projects stay within scope and cost.
                                    </li>
                                 </ul>
                              </CardContent>
                           </Card>
                           <Card>
                              <CardHeader>
                                 {" "}
                                 <CardTitle className="text-lg md:text-xl">
                                    Project Manager Intern & Team Lead
                                 </CardTitle>
                                 <div className="text-xs md:text-sm text-muted-foreground">
                                    Polish-Japanese Academy of Technology • May 2022 – July 2022
                                 </div>
                              </CardHeader>
                              <CardContent className="space-y-2 text-sm md:text-base">
                                 <ul className="list-disc list-inside space-y-2">
                                    <li>
                                       Directed a team of 5 developers to build a full-stack project
                                       management tool, achieving delivery within the set timeline.
                                    </li>
                                    <li>
                                       Oversaw the development of a{" "}
                                       <span className="bg-destructive">Java</span>-based backend
                                       and integration with{" "}
                                       <span className="bg-destructive">React</span> for the user
                                       interface.
                                    </li>
                                    <li>
                                       Designed and implemented project tracking features, including
                                       milestone tracking and Gantt charts.
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
                                    Bachelor&apos;s Degree in Business Administration, specialized
                                    in Project Management
                                 </CardTitle>
                                 <div className="text-xs md:text-sm text-muted-foreground">
                                    Vistula University | 2023-2026
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
                        <h3 className="mb-2 text-base md:text-lg font-medium">
                           Project Management Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="secondary">Jira</Badge>
                           <Badge variant="secondary">Trello</Badge>
                           <Badge variant="secondary">Monday.com</Badge>
                           <Badge variant="secondary">Microsoft Project</Badge>
                        </div>
                     </div>
                     <div>
                        <h3 className="mb-2 text-base md:text-lg font-medium">
                           Agile Methodologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="secondary">Scrum</Badge>
                           <Badge variant="secondary">Kanban</Badge>
                           <Badge variant="secondary">SAFe</Badge>
                        </div>
                     </div>
                     <div>
                        <h3 className="mb-2 text-base md:text-lg font-medium">Team Leadership</h3>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="secondary">Conflict resolution</Badge>
                           <Badge variant="secondary">Performance monitoring</Badge>
                           <Badge variant="secondary">Resource allocation</Badge>
                        </div>
                     </div>
                     <div>
                        <h3 className="mb-2 text-base md:text-lg font-medium">
                           Stakeholder Management
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="secondary">Requirement gathering</Badge>
                           <Badge variant="secondary">Progress reporting</Badge>
                           <Badge variant="secondary">Client communication</Badge>
                        </div>
                     </div>
                     <div>
                        <h3 className="mb-2 text-base md:text-lg font-medium">
                           Technical Proficiency
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="secondary">React</Badge>
                           <Badge variant="secondary">Python</Badge>
                           <Badge variant="secondary">TypeScript</Badge>
                           <Badge variant="secondary">Java</Badge>
                           <Badge variant="secondary">RESTful APIs</Badge>
                        </div>
                     </div>
                     <div>
                        <h3 className="mb-2 text-base md:text-lg font-medium">Risk Management</h3>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="secondary">Issue tracking</Badge>
                           <Badge variant="secondary">Mitigation strategies</Badge>
                           <Badge variant="secondary">Continuous improvement</Badge>
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

               {/* Certificates Section */}
               <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
               >
                  <h2 className="mb-4 md:mb-8 text-xl md:text-2xl font-semibold">Certificates</h2>
                  <div className="space-y-4 md:space-y-8">
                     <ul className="list-disc list-inside space-y-2">
                        <li>
                           Professional Diploma in Technical Project Management by MTF Institute
                        </li>
                        <li>Professional Diploma in Business Project Management</li>
                        <li>Professional Certificate in Agile and SCRUM</li>
                        <li>Databases with Python, MongoDB, MySQL</li>
                     </ul>
                  </div>
               </motion.section>
            </main>
         </div>
      </div>
   );
}
