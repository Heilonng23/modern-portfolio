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
   }, []);

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
      <div className="min-h-screen bg-background text-foreground">
         <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            <AnimatedCursor />
            <div className="mx-auto max-w-[60%] px-4 py-8 md:py-16">
               {/* Header Section */}
               <motion.header
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
               >
                  <div className="space-y-4">
                     <h1 className="text-4xl font-bold tracking-tight">IBRAGIMOV IBRAGIM</h1>
                     <h2 className="text-2xl text-muted-foreground">Software Engineer</h2>
                     <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Warsaw, Poland</span>
                     </div>
                     <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm" asChild>
                           <Link
                              href="https://drive.google.com/file/d/18RsQd31Tc4wUErguzQkJpmuEaNvSGEMz/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <FileText className="h-4 w-4 mr-2" />
                              View Resume
                           </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                           <Link href="mailto:ibrahimov.ibrahm@gmail.com">
                              <div className="flex items-center">
                                 <Mail className="h-4 w-4" />
                                 <span className="ml-2">ibrahimov.ibrahm@gmail.com</span>
                              </div>
                           </Link>
                        </Button>

                        <Button variant="outline" size="sm" asChild>
                           <Link href="https://github.com/Heilonng23" target="_blank">
                              <Github className="h-4 w-4" />
                              <span className="sr-only">GitHub</span>
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
                     className="mb-16"
                  >
                     <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="mb-8 w-full justify-center rounded-xl">
                           <TabsTrigger value="work" className="flex-1  rounded-xl">
                              Work Experience
                           </TabsTrigger>
                           <TabsTrigger value="education" className="flex-1  rounded-xl">
                              Education
                           </TabsTrigger>
                        </TabsList>
                        <TabsContent value="work">
                           <div className="space-y-8">
                              <Card>
                                 <CardHeader>
                                    <CardTitle>Junior Software Engineer</CardTitle>
                                    <div className="text-sm text-muted-foreground">
                                       Azercosmos • 2023 September - 2024 September
                                    </div>
                                 </CardHeader>
                                 <CardContent className="space-y-2">
                                    <ul className="list-disc list-inside space-y-2">
                                       <li>
                                          Developed user-facing features using React 18, TypeScript,
                                          and Redux
                                       </li>
                                       <li>
                                          Integrated RESTful APIs using Axios for satellite-based
                                          systems
                                       </li>
                                       <li>
                                          Implemented responsive designs using CSS3 and Bootstrap 5
                                       </li>
                                       <li>
                                          Collaborated with backend team to optimize Java-based
                                          microservices
                                       </li>
                                    </ul>
                                 </CardContent>
                              </Card>
                              <Card>
                                 <CardHeader>
                                    <CardTitle>Intern Frontend Developer</CardTitle>
                                    <div className="text-sm text-muted-foreground">
                                       VABISS • 2023 May - 2023 August
                                    </div>
                                 </CardHeader>
                                 <CardContent className="space-y-2">
                                    <ul className="list-disc list-inside space-y-2">
                                       <li>
                                          Developed UIs using React 17, TypeScript 4.5, and React
                                          hooks
                                       </li>
                                       <li>Implemented data visualizations using D3.js</li>
                                       <li>Optimized data handling with PostgreSQL</li>
                                       <li>
                                          Created reusable React components using CSS Grid and
                                          Flexbox
                                       </li>
                                    </ul>
                                 </CardContent>
                              </Card>
                              <Card>
                                 <CardHeader>
                                    <CardTitle>Intern Software Engineer</CardTitle>
                                    <div className="text-sm text-muted-foreground">
                                       SOCAR • 2022 October - 2023 March
                                    </div>
                                 </CardHeader>
                                 <CardContent className="space-y-2">
                                    <ul className="list-disc list-inside space-y-2">
                                       <li>Developed backend services using Python and Java</li>
                                       <li>
                                          Implemented data solutions with PostgreSQL and DynamoDB
                                       </li>
                                       <li>Utilized AWS services including Lambda and Kinesis</li>
                                    </ul>
                                 </CardContent>
                              </Card>
                           </div>
                        </TabsContent>
                        <TabsContent value="education">
                           <div className="space-y-8">
                              <Card>
                                 <CardHeader>
                                    <CardTitle>
                                       Bachelor&apos;s Degree in Business Management
                                    </CardTitle>
                                    <div className="text-sm text-muted-foreground">
                                       Vistula University
                                    </div>
                                 </CardHeader>
                              </Card>
                              <Card>
                                 <CardHeader>
                                    <CardTitle>
                                       Bachelor&apos;s Degree in Computer Science
                                    </CardTitle>
                                    <div className="text-sm text-muted-foreground">
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
                     className="mb-16"
                  >
                     <h2 className="mb-8 text-2xl font-semibold">Skills</h2>
                     <div className="space-y-4">
                        <div>
                           <h3 className="mb-2 text-lg font-medium">Frontend</h3>
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
                           <h3 className="mb-2 text-lg font-medium">Backend & Database</h3>
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
                           <h3 className="mb-2 text-lg font-medium">Other Skills</h3>
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
                     <h2 className="mb-8 text-2xl font-semibold">Projects</h2>
                     <div className="grid gap-8 md:grid-cols-2">
                        <Card className="overflow-hidden">
                           <CardHeader>
                              <CardTitle>Peazeful</CardTitle>
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
                                 <p className="text-sm text-muted-foreground">
                                    A micro SaaS app helping people to journal consistently for 5
                                    minutes a day with various templates and data statistics.
                                 </p>
                                 <div>
                                    <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
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
                              <CardTitle>Fiction Heaven</CardTitle>
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
                                 <p className="text-sm text-muted-foreground">
                                    A platform where you can search for movies and TV series, rate
                                    them, and save your ratings.
                                 </p>
                                 <div>
                                    <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
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
                     </div>
                  </motion.section>
               </main>
            </div>
         </div>
      </div>
   );
}
