import {
    IconLink,
    Paragraph,
    Section,
    ActionButton,
    ContactModule,
    Footer,
    SimpleHeader,
    Headline,
} from "@lsg/components";
import {
    communication___call,
    communication___envelope,
    social___linkedin,
    arrow___download,
} from "@lsg/icons";

import React, { ComponentProps } from "react";

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => <div className={`cb-card ${className || ''}`}>{children}</div>;
const CardContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const Tag = ({ children, label, color }: { children?: React.ReactNode, label?: string, color?: string }) => <span className={`cb-tag cb-tag--${color || 'default'}`}>{label || children}</span>;
const ArrowRight = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
    </svg>
);

const ChevronDown = () => (
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <polyline points="2 4 24 16 46 4"></polyline>
    </svg>
);


const App = () => {
    const [activeSection, setActiveSection] = React.useState("profile");

    const navigationTree: ComponentProps<typeof SimpleHeader>["navigationTree"] = [
        { name: "profile", label: "Profile", href: "#profile" },
        { name: "experience", label: "Experience", href: "#experience" },
        { name: "projects", label: "Projects", href: "#projects" },
        { name: "skills", label: "Skills & Education", href: "#skills" },
        // { name: "certifications", label: "Certifications", href: "#certifications" },
    ];

    const footerNavigationTree = [
        { label: "Impressum", href: "#", htmlAttrs: { lang: "en" }, name: "impressum" },
        { label: "Data Protection", href: "#", htmlAttrs: { lang: "en" }, name: "protection" },
    ];

    return (
        <div style={{ scrollBehavior: 'smooth' }}>
            {/* ====== HEADER ====== */}
            <SimpleHeader
                segmentLabel="IDDP Application"
                navigationTree={navigationTree}
                navigationAriaLabel="Main Navigation"
                menuFlyoutAriaLabel="Sub-Menu"
                logoHref="#"
                logoHtmlAttrs={{
                    "aria-label": "Commerzbank Homepage",
                    lang: "en",
                }}
                logoLabel="Commerzbank"
                logoName="item-logo"
                onLogoClick={(event) => {
                    event.preventDefault();
                    setActiveSection("item-logo");
                    window.scrollTo(0, 0);
                }}
                value={activeSection}
                onChange={(actElementName) => {
                    setActiveSection(actElementName);
                    const el = document.getElementById(actElementName);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                iconLinksInteraction={
                    <>
                        <IconLink icon={social___linkedin} appearance="no-text" href="https://www.linkedin.com/in/bhoomi-vithani" htmlAttrs={{ target: "_blank", rel: "noopener noreferrer" }} label="LinkedIn" />
                        <IconLink icon={communication___envelope} appearance="no-text" href="mailto:bhoomivithani1008@gmail.com" label="Email" />
                        <IconLink icon={arrow___download} appearance="no-text" href="/Lebenslauf_Bhoomi_Vithani_IDDP.pdf" htmlAttrs={{ download: "Lebenslauf_Bhoomi_Vithani_IDDP.pdf" }} label="Download Resume" />
                    </>
                }
                isSticky={true}
            />

            {/* ====== HERO / PROFILE SECTION ====== */}
            <section id="profile" className="hero-section">
                <div className="hero-bg-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">
                        Bhoomi <span style={{ color: 'var(--lsg-color-brand-default)' }}>Vithani</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Digital Business, Technology & Operations
                    </h2>
                    <p className="hero-description">
                        Management graduate exploring the intersection of digital transformation and the financial industry. Through projects in AI, automation, and data-driven decision-making, I have developed a strong foundation in combining innovation with strategic business thinking. Analytical, adaptable, and solution-oriented, I am motivated to drive digital innovation within Commerzbank's International Digital Development Program.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a href="mailto:bhoomivithani1008@gmail.com" className="cb-btn-pill cb-btn-pill--hero">
                            Email Me <ArrowRight />
                        </a>
                        <a href="https://www.linkedin.com/in/bhoomi-vithani" target="_blank" rel="noopener noreferrer" className="cb-btn-pill cb-btn-pill--hero-outline">
                            LinkedIn <ArrowRight />
                        </a>
                        <a href={`${import.meta.env.BASE_URL}Lebenslauf_Bhoomi_Vithani_IDDP.pdf`} target="_blank" rel="noopener noreferrer" download="Lebenslauf_Bhoomi_Vithani.pdf" className="cb-btn-pill cb-btn-pill--hero-outline">
                            Download PDF Resume <ArrowRight />
                        </a>
                    </div>

                    {/* Bouncing Scroll Down Indicator */}
                    <div
                        className="scroll-indicator"
                        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <ChevronDown />
                    </div>
                </div>
            </section>

            {/* ====== EXPERIENCE SECTION ====== */}
            <Section id="experience" backgroundColor="grey-10" horizontalAlign="left" verticalPadding="xl">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Headline size="h2" as="h2">Work Experience</Headline>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
                        {/* Commerzbank */}
                        <Card className="has-skills">
                            <CardContent>
                                <Headline size="h4" as="h3">Commerzbank</Headline>
                                <Paragraph size="helper-text" style={{ fontWeight: 'bold' }}>Intern as Business Expert in Corporate Clients - Treasury Platform | Since Jan 2026</Paragraph>
                                <Paragraph>
                                    • Supported Treasury and regulatory reporting by validating EAEG data, calculating interest accruals, and reconciling customer balances using SQL and Excel.<br />
                                    • Contributed to the Cashflow Pool product by analyzing pre-calculated cash flows and preparing structured financial reports for internal stakeholders.
                                </Paragraph>
                            </CardContent>
                            <div className="skills-popup">
                                <Tag color="primary">SQL</Tag>
                                <Tag color="primary">Excel</Tag>
                                <Tag color="brand">Treasury</Tag>
                                <Tag color="secondary">Reporting</Tag>
                            </div>
                        </Card>

                        {/* DekaBank */}
                        <Card className="has-skills">
                            <CardContent>
                                <Headline size="h4" as="h3">DekaBank</Headline>
                                <Paragraph size="helper-text" style={{ fontWeight: 'bold' }}>Working Student - Project Management Office | Sep 2025 - Dec 2025</Paragraph>
                                <Paragraph>
                                    • Prepared executive-level presentations and status reports for the S/4HANA Real Estate Asset Management implementation, highlighting project achievements and risks.<br />
                                    • Coordinated the preparation and follow-up of cross-functional workshops, drafting meeting minutes and aligning agendas.
                                </Paragraph>
                            </CardContent>
                            <div className="skills-popup">
                                <Tag color="primary">PMO</Tag>
                                <Tag color="brand">S/4HANA</Tag>
                                <Tag color="secondary">Agile</Tag>
                            </div>
                        </Card>

                        {/* Bluegain */}
                        <Card className="has-skills">
                            <CardContent>
                                <Headline size="h4" as="h3">Bluegain GmbH</Headline>
                                <Paragraph size="helper-text" style={{ fontWeight: 'bold' }}>Intern - AI & Digital Business Transformation | Mar 2025 – Apr 2025</Paragraph>
                                <Paragraph>
                                    • Identified and evaluated 78 AI use cases across 9 business units, conducting cost-benefit and risk-opportunity analyses.<br />
                                    • Authored the thought leadership article "AI Use Cases that Redefine Leadership" to strengthen external positioning as a forward-thinking AI advisory partner.
                                </Paragraph>
                            </CardContent>
                            <div className="skills-popup">
                                <Tag color="primary">AI Strategy</Tag>
                                <Tag color="brand">Transformation</Tag>
                                <Tag color="secondary">Analysis</Tag>
                            </div>
                        </Card>

                        {/* Architects */}
                        <Card className="has-skills">
                            <CardContent>
                                <Headline size="h4" as="h3">Jourdan & Müller Steinhauser PAS Architekten GmbH | Ekatra Design Studio</Headline>
                                <Paragraph size="helper-text" style={{ fontWeight: 'bold' }}>Architecture & Project Management | 2020 – 2023</Paragraph>
                                <Paragraph>
                                    • Managed and coordinated social housing development projects.<br />
                                    • Prepared detailed architectural drawings, project progress reports, and professional presentations for senior management and stakeholders.
                                </Paragraph>
                            </CardContent>
                            <div className="skills-popup">
                                <Tag color="brand">Project Mgmt</Tag>
                                <Tag color="primary">AutoCAD</Tag>
                                <Tag color="secondary">Reporting</Tag>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* ====== PROJECTS SECTION ====== */}
            <Section id="projects" backgroundColor="white" horizontalAlign="left" verticalPadding="xl">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Headline size="h2" as="h2">Projects & Innovation</Headline>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '20px', marginTop: '30px' }}>
                        <Card>
                            <CardContent>
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                                        <Tag label="Gen-AI" color="primary" />
                                        <Tag label="Design Thinking" color="secondary" />
                                    </div>
                                    <Headline size="h4" as="h3">Kitchen.AI Component</Headline>
                                    <Paragraph size="helper-text" style={{ marginBottom: '10px' }}>Digital Innovation Project MVP</Paragraph>
                                    <Paragraph>
                                        Developed a web application for intelligent food management based on a Tabularaza (zeb consulting) workshop. Focused on user-centric design, sustainability, and AI-driven process optimization.
                                    </Paragraph>
                                    <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
                                        <a href="https://preview--smartkuche-eco-eats-99.lovable.app/" target="_blank" rel="noopener noreferrer" className="cb-card-link">View MVP <ArrowRight /></a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <div style={{ display: 'flex', gap: '5px', marginBottom: '10px', flexWrap: 'wrap' }}>
                                        <Tag label="n8n Automation" color="brand" />
                                        <Tag label="Agile" color="secondary" />
                                    </div>
                                    <Headline size="h4" as="h3">AI Workflow System</Headline>
                                    <Paragraph size="helper-text" style={{ marginBottom: '10px' }}>AI & Operation Decisions</Paragraph>
                                    <Paragraph>
                                        Built an automated n8n workflow to optimize order tracking and planning. Integrated appointment scheduling and automated shopping list generation (bundling ingredient quantities and volumes) using modern IT architecture.
                                    </Paragraph>
                                    <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
                                        <a href="https://drive.google.com/file/d/1GIIZSCJqqiYldc2cxYaznEwQfmTLQ-6j/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cb-card-link">View Project <ArrowRight /></a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* ====== SKILLS & EDUCATION SECTION ====== */}
            <Section id="skills" backgroundColor="grey-10" horizontalAlign="left" verticalPadding="xl">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Headline size="h2" as="h2">Education & Attributes</Headline>

                    <div style={{ marginTop: '30px', marginBottom: '40px' }}>
                        <Headline size="h4" as="h3" style={{ marginBottom: '15px' }}>Core Capabilities</Headline>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            <Tag label="SQL" color="primary" />
                            <Tag label="Power-BI" color="primary" />
                            <Tag label="R" color="primary" />
                            <Tag label="Jira / Confluence" color="primary" />
                            <Tag label="Git" color="primary" />
                            <Tag label="Agile Transformation" color="secondary" />
                            <Tag label="OKR Integration" color="secondary" />
                            <Tag label="Data Strategy & SWOT" color="brand" />
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <Headline size="h4" as="h3" style={{ marginBottom: '20px' }}>Academic Background</Headline>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <Card>
                                    <CardContent>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            <div>
                                                <Headline size="h5" as="h4" style={{ marginBottom: '8px' }}>Masters in Management</Headline>
                                                <Paragraph size="helper-text" style={{ fontWeight: 'bold', color: 'var(--lsg-color-grey-80)' }}>Frankfurt School of Finance and Management</Paragraph>
                                                <Paragraph style={{ color: 'var(--lsg-color-grey-80)' }}>Expected July 2026</Paragraph>
                                            </div>
                                            <div>
                                                <Paragraph size="helper-text" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Related Modules:</Paragraph>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                    <Tag label="Digital Transformation" color="primary" />
                                                    <Tag label="Digital Innovation" color="secondary" />
                                                    <Tag label="AI and Operation Decisions" color="brand" />
                                                    <Tag label="Information Systems" color="primary" />
                                                    <Tag label="Financial Analysis and Performance Management" color="secondary" />
                                                    <Tag label="Managerial Data Science" color="brand" />
                                                    <Tag label="Digital Marketing" color="primary" />
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <Card>
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                        <Headline size="h5" as="h4" style={{ margin: 0 }}>M.Sc. Advanced Architecture</Headline>
                                        <span className="cb-grade-badge">Grade 1.8</span>
                                    </div>
                                    <Paragraph size="helper-text" style={{ fontWeight: 'bold', color: 'var(--lsg-color-grey-80)' }}>Frankfurt University of Applied Sciences</Paragraph>
                                    <Paragraph style={{ color: 'var(--lsg-color-grey-80)' }}>2021 - 2023</Paragraph>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                        <Headline size="h5" as="h4" style={{ margin: 0 }}> Bachelor of Architecture </Headline><p></p>
                                        <span className="cb-grade-badge">Grade 1.9</span>
                                    </div>
                                    <Paragraph size="helper-text" style={{ fontWeight: 'bold', color: 'var(--lsg-color-grey-80)' }}>Gujarat Technological University, India</Paragraph>
                                    <Paragraph style={{ color: 'var(--lsg-color-grey-80)' }}>2015 - 2020</Paragraph>
                                </CardContent>
                            </Card>
                            {/* <Card>
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                        <Headline size="h5" as="h4" style={{ margin: 0 }}>B.Arch Architecture</Headline>
                                        <span className="cb-grade-badge">Grade 1.9</span>
                                    </div>
                                    <Paragraph size="helper-text" style={{ fontWeight: 'bold', color: 'var(--lsg-color-grey-80)' }}>Gujarat Technological University, India</Paragraph>
                                    <Paragraph style={{ color: 'var(--lsg-color-grey-80)' }}>2015 - 2020</Paragraph>
                                </CardContent>
                            </Card> */}
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <Headline size="h4" as="h3" style={{ marginBottom: '20px' }}>Certificates</Headline>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            <Card>
                                <CardContent>
                                    <Headline size="h5" as="h4" style={{ marginBottom: '10px' }}>SQL + Excel Certificate</Headline>
                                    <Paragraph>Pivot Tables, VLOOKUP, Database Functions, Data Aggregation, Data Visualization, Data Analysis</Paragraph>
                                    <div style={{ marginTop: '15px' }}>
                                        <a href="https://drive.google.com/file/d/1i4P7TAMzWBVbsRHc-SwK5IQCoG2eOlxN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cb-card-link">View Credential <ArrowRight /></a>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Headline size="h5" as="h4" style={{ marginBottom: '10px' }}>Data Preparation with SQL</Headline>
                                    <Paragraph>Data Preparation & Manipulation, Database Queries, Aggregations</Paragraph>
                                    <div style={{ marginTop: '15px' }}>
                                        <a href="https://drive.google.com/file/d/1j3xrsecT8787N6Xp_hpL5qZRMv_UYL0t/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cb-card-link">View Credential <ArrowRight /></a>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Headline size="h5" as="h4" style={{ marginBottom: '10px' }}>Bloomberg Market Concepts</Headline>
                                    <Paragraph>Financial Markets, Economic Indicators, Fixed Income, Currencies</Paragraph>
                                    <div style={{ marginTop: '15px' }}>
                                        <a href="https://portal.bloombergforeducation.com/certificates/xtf9NeKVaaUqVpZ45TxNosBx" target="_blank" rel="noopener noreferrer" className="cb-card-link">View Credential <ArrowRight /></a>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Headline size="h5" as="h4" style={{ marginBottom: '10px' }}>McKinsey Forward Program</Headline>
                                    <Paragraph>Problem Solving, Communication, Analytical Thinking, Teamwork</Paragraph>
                                    <div style={{ marginTop: '15px' }}>
                                        <a href="https://www.credly.com/badges/9b45f9e7-8a66-44db-9bfa-731e6fe70fff/public_url" target="_blank" rel="noopener noreferrer" className="cb-card-link">View Credential <ArrowRight /></a>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Headline size="h5" as="h4" style={{ marginBottom: '10px' }}>Scrum Master Certification</Headline>
                                    <Paragraph>Scrum, Agile Methodologies, Project Management, Team Roles, Sprint Planning</Paragraph>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Headline size="h5" as="h4" style={{ marginBottom: '10px' }}>German Language Proficiency</Headline>
                                    <Paragraph>December 2023 – August 2024</Paragraph>
                                    <div style={{ marginTop: '15px' }}>
                                        <a href="https://drive.google.com/file/d/1lcNG0tG2Rzz2CE8jZkB0iv9bHez6AmgW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cb-card-link">View Credential <ArrowRight /></a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ====== FOOTER ====== */}
            <Footer
                previousTheme="light"
                contactArea={
                    <ContactModule
                        headline={<>Let's Connect</>}
                        headlineAs="h4"
                    >
                        <ActionButton
                            icon={communication___call}
                            color="secondary"
                            href="tel:004915730043386"
                            label="+49 157 300 433 86"
                        />
                        <ActionButton
                            icon={communication___envelope}
                            color="secondary"
                            href="mailto:bhoomivithani1008@gmail.com"
                            label="bhoomivithani1008@gmail.com"
                        />
                        <ActionButton
                            icon={social___linkedin}
                            color="secondary"
                            href="https://www.linkedin.com/in/bhoomi-vithani"
                            htmlAttrs={{ target: "_blank" }}
                            label="LinkedIn"
                        />
                    </ContactModule>
                }
                brandBarSlogan="Die Bank an Ihrer Seite"
                brandBarHref="https://jobs.commerzbank.com/"
                brandBarLogoHtmlAttrs={{ target: "_blank", lang: "de" }}
                metaBarNavigationTree={footerNavigationTree}
                metaBarNavigationAriaLabel="Legal"
                metaBarSocialLinksAriaLabel="Social Media"
                metaBarSocialLinks={
                    <IconLink
                        icon={social___linkedin}
                        iconVariant="solid"
                        appearance="no-text"
                        href="https://www.linkedin.com/in/bhoomi-vithani"
                        label="LinkedIn"
                    />
                }
            />
        </div>
    );
};

export default App;
