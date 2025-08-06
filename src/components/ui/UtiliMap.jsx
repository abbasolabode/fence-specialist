/* eslint-disable react/prop-types */
export default function UtiliMap({ homepageMap }) {
    return (
        <div className={`w-full h-full ${homepageMap}`}>
            <iframe
                title="Our Location"
                className="w-full h-full rounded-lg border-0"
                src="https://maps.google.com/maps?width=420&amp;height=400&amp;hl=en&amp;q=5950%20NJ-42,%20Turnersville,%20NJ%2008012+(fence%20app)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
  }