import Link from 'next/link';
import { NAIROBI_HUBS } from '@/nairobiHubs';

export interface HubLogisticsProps {
  currentSlug: string;
  hubName: string;
  roadsCovered: string[];
  deliveryTurnaround: string;
  buildingAccessNote: string;
  idealForSectors: string[];
}

const HubLogistics = ({
  currentSlug,
  hubName,
  roadsCovered,
  deliveryTurnaround,
  buildingAccessNote,
  idealForSectors,
}: HubLogisticsProps) => {
  const siblingHubs = Object.values(NAIROBI_HUBS).filter(
    (hub) => hub.slug !== currentSlug
  );

  return (
    <section
      style={{
        padding: '4rem 1.5rem',
        backgroundColor: '#111111',
        color: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#FFE100',
            color: '#000000',
            fontWeight: 700,
            fontSize: '0.8rem',
            padding: '0.3rem 0.75rem',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem',
          }}
        >
          Local Delivery & Logistics
        </span>

        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          {hubName} Coverage, Delivery Windows & Building Access
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          {/* Card 1: Streets & Roads */}
          <div
            style={{
              backgroundColor: '#1b1b1b',
              border: '1px solid #2e2e2e',
              borderRadius: '10px',
              padding: '1.5rem',
            }}
          >
            <h3 style={{ color: '#FFE100', marginBottom: '0.75rem', fontSize: '1.15rem' }}>
              Roads & Towers Covered in {hubName}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {roadsCovered.map((road) => (
                <span
                  key={road}
                  style={{
                    backgroundColor: '#262626',
                    border: '1px solid #3a3a3a',
                    padding: '0.35rem 0.7rem',
                    borderRadius: '999px',
                    fontSize: '0.88rem',
                  }}
                >
                  {road}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Dispatch & Building Access */}
          <div
            style={{
              backgroundColor: '#1b1b1b',
              border: '1px solid #2e2e2e',
              borderRadius: '10px',
              padding: '1.5rem',
            }}
          >
            <h3 style={{ color: '#FFE100', marginBottom: '0.75rem', fontSize: '1.15rem' }}>
              Dispatch & Building Clearance
            </h3>
            <p style={{ marginBottom: '0.85rem', lineHeight: 1.6, color: '#e5e5e5' }}>
              <strong>Turnaround:</strong> {deliveryTurnaround}
            </p>
            <p style={{ lineHeight: 1.6, color: '#cccccc' }}>
              <strong>Doorstep Handoff:</strong> {buildingAccessNote}
            </p>
          </div>

          {/* Card 3: Sectors Served */}
          <div
            style={{
              backgroundColor: '#1b1b1b',
              border: '1px solid #2e2e2e',
              borderRadius: '10px',
              padding: '1.5rem',
            }}
          >
            <h3 style={{ color: '#FFE100', marginBottom: '0.75rem', fontSize: '1.15rem' }}>
              Workplaces We Serve in {hubName}
            </h3>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8, color: '#e5e5e5' }}>
              {idealForSectors.map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Internal Links to Parent City Hub & Sibling Hubs */}
        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #2a2a2a',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.95rem',
          }}
        >
          <span style={{ color: '#aaaaaa' }}>Also delivering across Nairobi:</span>
          <Link
            href="/office-supplies-nairobi"
            style={{ color: '#FFE100', textDecoration: 'underline' }}
          >
            All Nairobi Hubs
          </Link>
          {siblingHubs.map((hub) => (
            <Link
              key={hub.slug}
              href={`/office-supplies-nairobi/${hub.slug}`}
              style={{ color: '#FFE100', textDecoration: 'underline' }}
            >
              Office Supplies {hub.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubLogistics;