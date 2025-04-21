// TermsAndConditions.tsx
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const TermsAndConditions = () => {
  const lastUpdated = "April 21, 2025";

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header with Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Terms and Conditions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Terms and Conditions
              </h1>
              <p className="text-gray-500 mt-1">Last Updated: {lastUpdated}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </Button>
              <Button variant="outline" size="sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </Button>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-500 text-sm">
                Please read these Terms and Conditions carefully before using
                our website and services. By accessing or using our platform,
                you agree to be bound by these Terms. If you disagree with any
                part of these terms, you may not access our services.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="sticky top-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Contents</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#agreement"
                        className="text-blue-600 hover:underline"
                      >
                        1. Agreement to Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#intellectual-property"
                        className="text-blue-600 hover:underline"
                      >
                        2. Intellectual Property
                      </a>
                    </li>
                    <li>
                      <a
                        href="#user-accounts"
                        className="text-blue-600 hover:underline"
                      >
                        3. User Accounts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#user-content"
                        className="text-blue-600 hover:underline"
                      >
                        4. User Content
                      </a>
                    </li>
                    <li>
                      <a
                        href="#prohibited-activities"
                        className="text-blue-600 hover:underline"
                      >
                        5. Prohibited Activities
                      </a>
                    </li>
                    <li>
                      <a
                        href="#payment-terms"
                        className="text-blue-600 hover:underline"
                      >
                        6. Payment Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#privacy-policy"
                        className="text-blue-600 hover:underline"
                      >
                        7. Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#limitation-liability"
                        className="text-blue-600 hover:underline"
                      >
                        8. Limitation of Liability
                      </a>
                    </li>
                    <li>
                      <a
                        href="#disclaimer"
                        className="text-blue-600 hover:underline"
                      >
                        9. Disclaimer
                      </a>
                    </li>
                    <li>
                      <a
                        href="#governing-law"
                        className="text-blue-600 hover:underline"
                      >
                        10. Governing Law
                      </a>
                    </li>
                    <li>
                      <a
                        href="#changes"
                        className="text-blue-600 hover:underline"
                      >
                        11. Changes to Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="text-blue-600 hover:underline"
                      >
                        12. Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-3/4">
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-8">
                    <section id="agreement">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        1. Agreement to Terms
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          By accessing our website at [Your Website URL], you
                          are agreeing to be bound by these Terms and
                          Conditions, all applicable laws and regulations, and
                          agree that you are responsible for compliance with any
                          applicable local laws.
                        </p>
                        <p>
                          If you do not agree with any of these terms, you are
                          prohibited from using or accessing this site. The
                          materials contained in this website are protected by
                          applicable copyright and trademark law.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="intellectual-property">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        2. Intellectual Property
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          The Service and its original content (excluding User
                          Content), features, and functionality are and will
                          remain the exclusive property of [Your Company Name]
                          and its licensors. The Service is protected by
                          copyright, trademark, and other laws of both the [Your
                          Country] and foreign countries. Our trademarks and
                          trade dress may not be used in connection with any
                          product or service without the prior written consent
                          of [Your Company Name].
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="user-accounts">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        3. User Accounts
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          When you create an account with us, you must provide
                          information that is accurate, complete, and current at
                          all times. Failure to do so constitutes a breach of
                          these Terms, which may result in immediate termination
                          of your account on our Service.
                        </p>
                        <p>
                          You are responsible for safeguarding the password that
                          you use to access the Service and for any activities
                          or actions under your password. You agree not to
                          disclose your password to any third party. You must
                          notify us immediately upon becoming aware of any
                          breach of security or unauthorized use of your
                          account.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="user-content">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        4. User Content
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          Our Service may allow you to post, link, store, share
                          and otherwise make available certain information,
                          text, graphics, videos, or other material. By
                          providing User Content to the Service, you grant us
                          the right and license to use, modify, publicly
                          perform, publicly display, reproduce, and distribute
                          such content on and through the Service.
                        </p>
                        <p>
                          You retain any and all of your rights to any User
                          Content you submit, post or display on or through the
                          Service and you are responsible for protecting those
                          rights. You represent and warrant that: (i) the User
                          Content is yours or you have the right to use it and
                          grant us the rights and license as provided in these
                          Terms, and (ii) the posting of your User Content on or
                          through the Service does not violate the privacy
                          rights, publicity rights, copyrights, contract rights
                          or any other rights of any person.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="prohibited-activities">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        5. Prohibited Activities
                      </h2>
                      <div className="text-gray-700">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Prohibited Uses</AccordionTrigger>
                            <AccordionContent>
                              <p className="mb-2">
                                You agree not to use the Service:
                              </p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>
                                  In any way that violates any applicable
                                  national or international law or regulation.
                                </li>
                                <li>
                                  For the purpose of exploiting, harming, or
                                  attempting to exploit or harm minors in any
                                  way.
                                </li>
                                <li>
                                  To transmit, or procure the sending of, any
                                  advertising or promotional material, including
                                  any "junk mail", "chain letter," "spam," or
                                  any other similar solicitation.
                                </li>
                                <li>
                                  To impersonate or attempt to impersonate the
                                  Company, a Company employee, another user, or
                                  any other person or entity.
                                </li>
                                <li>
                                  In any way that infringes upon the rights of
                                  others, or in any way is illegal, threatening,
                                  fraudulent, or harmful.
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-2">
                            <AccordionTrigger>System Abuse</AccordionTrigger>
                            <AccordionContent>
                              <p className="mb-2">
                                You specifically agree not to:
                              </p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>
                                  Use the Service in any manner that could
                                  disable, overburden, damage, or impair the
                                  site.
                                </li>
                                <li>
                                  Use any robot, spider, or other automatic
                                  device, process, or means to access the
                                  Service for any purpose, including monitoring
                                  or copying any of the material on the Service.
                                </li>
                                <li>
                                  Use any manual process to monitor or copy any
                                  of the material on the Service or for any
                                  other unauthorized purpose without our prior
                                  written consent.
                                </li>
                                <li>
                                  Use any device, software, or routine that
                                  interferes with the proper working of the
                                  Service.
                                </li>
                                <li>
                                  Introduce any viruses, trojan horses, worms,
                                  logic bombs, or other material which is
                                  malicious or technologically harmful.
                                </li>
                                <li>
                                  Attempt to gain unauthorized access to,
                                  interfere with, damage, or disrupt any parts
                                  of the Service, the server on which the
                                  Service is stored, or any server, computer, or
                                  database connected to the Service.
                                </li>
                                <li>
                                  Attack the Service via a denial-of-service
                                  attack or a distributed denial-of-service
                                  attack.
                                </li>
                                <li>
                                  Otherwise attempt to interfere with the proper
                                  working of the Service.
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </section>

                    <Separator />

                    <section id="payment-terms">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        6. Payment Terms
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          Certain aspects of the Service may be provided for a
                          fee. You will be required to select a payment plan and
                          provide accurate information regarding your payment
                          method. By submitting such payment information, you
                          automatically authorize us to charge all fees incurred
                          through your account to any such payment instruments.
                        </p>
                        <p>
                          All payments are non-refundable except as expressly
                          set forth in these Terms. You are responsible for all
                          applicable taxes, and we will charge tax when required
                          to do so. Some jurisdictions may require us to collect
                          VAT or sales tax from you. Any such taxes will be
                          added to fees billed to you, if applicable.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="privacy-policy">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        7. Privacy Policy
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          Your use of the Service is also governed by our
                          Privacy Policy, which is incorporated into these Terms
                          by reference. Please review our Privacy Policy, which
                          explains how we collect, use, and disclose information
                          that pertains to your privacy.
                        </p>
                        <p>
                          By accepting these Terms of Service, you agree to our
                          collection, use, and disclosure of your information as
                          described in our Privacy Policy.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="limitation-liability">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        8. Limitation of Liability
                      </h2>
                      <div className="text-gray-700 space-y-3 bg-gray-50 p-4 border border-gray-200 rounded-md">
                        <p className="font-medium">
                          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT
                          SHALL THE COMPANY, ITS AFFILIATES, DIRECTORS,
                          EMPLOYEES, AGENTS, SUPPLIERS OR LICENSORS BE LIABLE
                          FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL,
                          CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING WITHOUT
                          LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE,
                          DATA OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE
                          USE OF, OR INABILITY TO USE, THIS SERVICE.
                        </p>
                        <p>
                          UNDER NO CIRCUMSTANCES WILL THE COMPANY BE RESPONSIBLE
                          FOR ANY DAMAGE, LOSS OR INJURY RESULTING FROM HACKING,
                          TAMPERING OR OTHER UNAUTHORIZED ACCESS OR USE OF THE
                          SERVICE OR YOUR ACCOUNT OR THE INFORMATION CONTAINED
                          THEREIN.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="disclaimer">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        9. Disclaimer
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS
                          AVAILABLE" BASIS. THE COMPANY MAKES NO WARRANTIES,
                          EXPRESS OR IMPLIED, REGARDING THE OPERATION OF THE
                          SERVICE, OR THE INFORMATION, CONTENT OR MATERIALS
                          INCLUDED THEREIN.
                        </p>
                        <p>
                          THE COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR
                          IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
                          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                          PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="governing-law">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        10. Governing Law
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          These Terms shall be governed and construed in
                          accordance with the laws of [Your Country/State],
                          without regard to its conflict of law provisions.
                        </p>
                        <p>
                          Our failure to enforce any right or provision of these
                          Terms will not be considered a waiver of those rights.
                          If any provision of these Terms is held to be invalid
                          or unenforceable by a court, the remaining provisions
                          of these Terms will remain in effect.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="changes">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        11. Changes to Terms
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          We reserve the right, at our sole discretion, to
                          modify or replace these Terms at any time. If a
                          revision is material, we will try to provide at least
                          30 days' notice prior to any new terms taking effect.
                          What constitutes a material change will be determined
                          at our sole discretion.
                        </p>
                        <p>
                          By continuing to access or use our Service after those
                          revisions become effective, you agree to be bound by
                          the revised terms. If you do not agree to the new
                          terms, please stop using the Service.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    <section id="contact">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        12. Contact Us
                      </h2>
                      <div className="text-gray-700 space-y-3">
                        <p>
                          If you have any questions about these Terms, please
                          contact us at:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                          <p>[Your Company Name]</p>
                          <p>[Company Address]</p>
                          <p>
                            Email:{" "}
                            <a
                              href="mailto:legal@yourcompany.com"
                              className="text-blue-600 hover:underline"
                            >
                              legal@yourcompany.com
                            </a>
                          </p>
                          <p>Phone: [Your Contact Number]</p>
                        </div>
                      </div>
                    </section>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </Card>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-600 text-sm">
                By using our services, you confirm that you have read and agree
                to our Terms and Conditions.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Button>
              <Button>Accept Terms</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
