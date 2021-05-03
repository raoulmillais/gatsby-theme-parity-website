import React from 'react';
import { useIntl } from 'react-intl';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';

export default function BugBountyPage() {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'bug-bounty-page-seo' })} />
      <section className="md:bg-hero-pattern bg-scroll bg-top bg-no-repeat bg-contain">
        <div className="md:flex md:justify-center">
          <div className="mx-4 md:text-lg max-w-screen-md">
            <article>
              <h2 className="font-normal text-center pt-24 md:text-5xl">
                {intl.formatMessage({ id: 'bug-bounty-page-title' })}
              </h2>
              <div className="py-12 md:flex">
                <div className="bg-white md:mx-4 pt-5 pb-2 px-8 shadow-md ring-1 ring-black ring-opacity-5 h-full md:w-1/2">
                  <a className="no-underline" href="/bug-bounty/#hunters">
                    <h3 className="font-normal text-textDark text-2xl hover:text-parityPink hover:underline">
                      {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-title' })}
                    </h3>
                  </a>
                  <ul className="text-textDark ml-4">
                    <a className="no-underline" href="/bug-bounty/#hunters-description">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-one' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-investigation-reporting">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-two' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-eligibility">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-three' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-ineligibility">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-four' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-reward">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-five' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-report-bug">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-six' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-legal-information">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-seven' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-governing-law">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-eight' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-customer-services">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-nine' })}
                      </li>
                    </a>
                  </ul>
                </div>
                <div className="bg-white md:mx-4 my-6 md:my-0 pt-5 pb-2 px-8 shadow-md ring-1 ring-black ring-opacity-5 h-full md:w-1/2">
                  <a className="no-underline" href="/bug-bounty/#contributors">
                    <h3 className="font-normal text-textDark text-2xl hover:text-parityPink hover:underline">
                      {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-title' })}
                    </h3>
                  </a>
                  <ul className="font-normal text-textDark ml-4">
                    <a className="no-underline" href="/bug-bounty/#contributors-description">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-one' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-making-contributions">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-two' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-refunds">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-three' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-confidentiality">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-four' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-data-protection">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-five' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-liability">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-six' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-waiver">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-seven' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-third-party">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-eight' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-severance">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-nine' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-agreement">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-ten' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-governing-law">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-eleven' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-customer-services">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-twelve' })}
                      </li>
                    </a>
                  </ul>
                </div>
              </div>

              <h3 id="hunters">{intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-title' })}</h3>
              <h4 id="hunters-description">{intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-one' })}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-hunters-description-html' }),
                }}
              />
              <h4 id="hunters-investigation-reporting">
                {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-two' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-hunters-responsible-investigation-html' }),
                }}
              />
              <h4 id="hunters-eligibility">{intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-three' })}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-hunters-eligibility-html' }),
                }}
              />
              <h4 id="hunters-ineligibility">{intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-four' })}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-hunters-ineligibility-html' }),
                }}
              />
              <h4 id="hunters-reward">{intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-five' })}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-hunters-reward-html' }),
                }}
              />
              <h4 id="hunters-report-bug">{intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-six' })}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-hunters-report-a-bug-html' }),
                }}
              />
              <h4 id="hunters-legal-information">
                {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-seven' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-hunters-legal-information-html' }),
                }}
              />
              <h4 id="hunters-governing-law">{intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-eight' })}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-hunters-governing-law-html' }),
                }}
              />
              <h4 id="hunters-customer-services">
                {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-nine' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-hunters-customer-service-html' }),
                }}
              />
              <hr />
              <br />
              <h3 id="contributors">{intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-title' })}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-title-html' }),
                }}
              />
              <h4 id="contributors-description">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-one' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-html' }),
                }}
              />
              <h4 id="contributors-making-contributions">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-two' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-making-contributions-html' }),
                }}
              />
              <h4 id="contributors-refunds">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-three' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-refunds-and-cancellations-html' }),
                }}
              />
              <h4 id="contributors-confidentiality">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-four' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-confidentiality-and-publicity-html' }),
                }}
              />
              <h4 id="contributors-data-protection">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-five' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-data-protection-html' }),
                }}
              />
              <h4 id="contributors-liability">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-six' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-exclusion-html' }),
                }}
              />
              <h4 id="contributors-waiver">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-seven' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-waiver-html' }),
                }}
              />
              <h4 id="contributors-third-party">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-eight' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-third-party-html' }),
                }}
              />
              <h4 id="contributors-severance">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-nine' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-severance-html' }),
                }}
              />
              <h4 id="contributors-agreement">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-ten' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-entire-agreement-html' }),
                }}
              />
              <h4 id="contributors-governing-law">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-eleven' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-governing-law-html' }),
                }}
              />
              <h4 id="contributors-customer-services">
                {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-twelve' })}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'bug-bounty-page-contributors-customer-services-html' }),
                }}
              />
            </article>
          </div>
        </div>
      </section>
      <section className="border-t mt-24">
        <div className="text-center py-20">
          <h3 className="font-normal mb-2">{intl.formatMessage({ id: 'bug-bounty-footer-cta-title' })}</h3>
          <h3 className="font-normal mb-4">
            {intl.formatMessage({ id: 'bug-bountry-footer-cta-one' })}
            {` `}
            <a className="text-parityPink font-semibold no-underline hover:underline" href="mailto:bugbounty@parity.io">
              bugbounty@parity.io
            </a>
          </h3>
        </div>
      </section>
      <Social />
    </Layout>
  );
}
