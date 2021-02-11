import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';
import NewsletterModal from '../components/NewsletterModal';
import { useIntl } from 'react-intl';
import EventCard from '../components/EventCard';
import eventsData from '../../content/events/events.json';

export default function EventsPage() {
  const intl = useIntl();
  const { events } = eventsData;

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'events-page-seo' })} />
      <section className="bg-hero-pattern-dark bg-parityGray bg-cover bg-center bg-no-repeat -mt-32 w-screen">
        <div className="h-full md:pt-32">
          <div className="container h-full text-center pt-48 md:pt-24 pb-12 px-2 md:flex md:flex-col md:justify-center md:max-w-screen-md">
            <h3 className="md:text-5xl">{intl.formatMessage({ id: 'events-page-title' })}</h3>
          </div>
        </div>
      </section>
      <section className="bg-parityGray pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-start">
            {events.map((event: any, index) => {
              return (
                <div key={index}>
                  <EventCard
                    dateTime={event.dateTime}
                    location={event.location}
                    title={event.title}
                    description={event.description}
                    cta={event.cta}
                    link={event.link}
                    image={event.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-parityGray pb-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-6">{intl.formatMessage({ id: 'events-page-newsletter-title' })}</h3>
            <p className="m-0">{intl.formatMessage({ id: 'events-page-newsletter-description' })}</p>
            <NewsletterModal />
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}
