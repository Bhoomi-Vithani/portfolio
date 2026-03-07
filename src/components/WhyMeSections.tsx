import React, { useEffect, useRef } from 'react';
import { Headline, Paragraph, Section } from "@lsg/components";

const WhyMeSections = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // Setup intersection observer for scroll animations
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.15, // Trigger when 15% of the element is visible
            rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
        });

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach((el) => observerRef.current?.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <>
            {/* ====== THE THESIS (The Pivot) ====== */}
            <section id="thesis" className="thesis-section">
                <div className="thesis-content reveal">
                    <div className="section-badge-container">
                        <div className="section-badge-bg"></div>
                        <h2 className="section-badge-text">Why Me?</h2>
                    </div>
                    <p className="thesis-text">
                        I work where <span className="highlight">foundations</span> matter, where <span className="highlight">complexity</span> requires sequencing, and where <span className="highlight">innovation</span> must justify itself.
                    </p>
                    <div className="thesis-keywords">
                        <span>Structure.</span>
                        <span>Transformation.</span>
                        <span>Judgment.</span>
                    </div>
                    <p className="thesis-conclusion">
                        That is how I think.<br />
                        That is how I contribute.
                    </p>
                </div>
            </section>

            {/* ====== THE THREE PILLARS ====== */}
            {/* <Section id="pillars" backgroundColor="grey-10" horizontalAlign="left" verticalPadding="xl">
                <div className="pillars-container">
                    <div className="reveal">
                        <Headline size="h2" as="h2">The Three Pillars</Headline>
                    </div>

                    <div className="pillars-grid">
                        <div className="cb-card cb-card--pillar reveal delay-1">
                            <div className="pillar-header">
                                <span className="pillar-number">01</span>
                                <Headline size="h4" as="h3">FOUNDATION | PRECISION</Headline>
                            </div>
                            <Paragraph size="helper-text" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
                                Corporate Clients Treasury Platform Intern
                            </Paragraph>
                            <Paragraph>
                                Validating EAEG data, reconciling balances, calculating accruals. Not glamorous work. Foundational work.
                            </Paragraph>
                            <Paragraph style={{ marginTop: '12px', fontStyle: 'italic', fontWeight: '500' }}>
                                "Digital ambition requires structural rigor. When the data layer lacks integrity, innovation cannot scale."
                            </Paragraph>
                        </div>

                        <div className="cb-card cb-card--pillar reveal delay-2">
                            <div className="pillar-header">
                                <span className="pillar-number">02</span>
                                <Headline size="h4" as="h3">TRANSFORMATION | STRUCTURE IN MOTION</Headline>
                            </div>
                            <Paragraph size="helper-text" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
                                S/4HANA Implementation at DekaBank
                            </Paragraph>
                            <Paragraph>
                                Transformation is rarely dramatic. It is disciplined progression.
                            </Paragraph>
                            <Paragraph style={{ marginTop: '12px', fontStyle: 'italic', fontWeight: '500' }}>
                                "Operating where complexity demands clarity—where systems evolve because someone ensures they do."
                            </Paragraph>
                        </div>

                        <div className="cb-card cb-card--pillar reveal delay-3">
                            <div className="pillar-header">
                                <span className="pillar-number">03</span>
                                <Headline size="h4" as="h3">INNOVATION | JUDGMENT OVER HYPE</Headline>
                            </div>
                            <Paragraph size="helper-text" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
                                Evaluating 78 AI Use Cases at Bluegain GmbH
                            </Paragraph>
                            <Paragraph>
                                Not every technological possibility creates value. Impact emerges where judgment meets execution.
                            </Paragraph>
                            <Paragraph style={{ marginTop: '12px', fontStyle: 'italic', fontWeight: '500' }}>
                                "Digital progress is driven by deliberate decisions."
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </Section> */}

            {/* ====== THE THREE PILLARS - NEW ====== */}
            <section className="pillars-new-section">
                <div className="pillars-new-content text-center">
                    <Headline size="h2" as="h2" className="reveal fade-up">The Three Pillars</Headline>

                    <div className="pillars-new-rows">
                        {/* Pillar 1 */}
                        <div className="pillar-row reveal delay-1">
                            <div className="pillar-row-header">
                                <span className="pillar-row-number">01.</span>
                                <Headline size="h4" as="h3" className="pillar-row-title">FOUNDATION - PRECISION</Headline>
                            </div>
                            <div className="pillar-row-body">
                                <Paragraph>
                                    At Commerzbank, I worked within treasury and regulatory data flows - validating EAEG data, reconciling balances, calculating accruals. Not glamorous work. Fundamental work.
                                </Paragraph>
                                <Paragraph style={{ marginTop: '12px', textWrap: 'pretty' }}>
                                    It reinforced a principle: digital ambition requires structural rigor. When the data layer lacks integrity, innovation cannot scale sustainably.
                                </Paragraph>
                                <Paragraph style={{ marginTop: '12px', fontStyle: 'italic', fontWeight: '500' }}>
                                    That perspective continues to guide me.
                                </Paragraph>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="pillar-row reveal delay-2">
                            <div className="pillar-row-header">
                                <span className="pillar-row-number">02.</span>
                                <Headline size="h4" as="h3" className="pillar-row-title">TRANSFORMATION - STRUCTURE IN MOTION</Headline>
                            </div>
                            <div className="pillar-row-body">
                                <Paragraph>
                                    Supporting the S/4HANA implementation at DekaBank exposed me to transformation from within. Milestones. Risks. Alignment. Execution.
                                </Paragraph>
                                <Paragraph style={{ marginTop: '12px' }}>
                                    Transformation is rarely dramatic. It is disciplined progression.
                                </Paragraph>
                                <Paragraph style={{ marginTop: '12px', fontStyle: 'italic', fontWeight: '500' }}>
                                    I learned to operate where complexity demands clarity where systems evolve because structure is actively maintained.
                                </Paragraph>
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="pillar-row reveal delay-3">
                            <div className="pillar-row-header">
                                <span className="pillar-row-number">03.</span>
                                <Headline size="h4" as="h3" className="pillar-row-title">INNOVATION - JUDGMENT OVER HYPE</Headline>
                            </div>
                            <div className="pillar-row-body">
                                <Paragraph>
                                    Evaluating 78 AI use cases, developing KPIs, and shaping prototypes required more than curiosity. It required discernment.
                                </Paragraph>
                                <Paragraph style={{ marginTop: '12px', textWrap: 'pretty' }}>
                                    Not every technological possibility creates value. Impact emerges where judgment meets execution.
                                </Paragraph>
                                <Paragraph style={{ marginTop: '12px', fontStyle: 'italic', fontWeight: '500' }}>
                                    Digital progress is driven by deliberate decisions.
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== THE CULTURE FIT ====== */}
            <section id="culture-fit" className="culture-fit-section">
                <div className="culture-fit-content reveal">
                    <div className="culture-fit-box">
                        <h2 className="culture-fit-headline">The Yellow Heart</h2>
                        <p className="culture-fit-text">
                            What attracts me to Team Yellow is ambition paired with responsibility. The Yellow Heart represents conviction combined with accountability.
                        </p>
                        <p className="culture-fit-text" style={{ marginTop: '24px', fontWeight: '500' }}>
                            I am ready to contribute where structure and innovation intersect, and to help build what scales.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyMeSections;
