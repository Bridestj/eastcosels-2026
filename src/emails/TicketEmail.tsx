import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type Props = {
  name: string;
  registrationId: string;
};

export default function TicketEmail({
  name,
  registrationId,
}: Props) {
  return (
    <Html>
      <Head />

      <Preview>
        Your EASTCOSELS 2026 registration has been confirmed.
      </Preview>

      <Body
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily: "Arial",
        }}
      >
        <Container
          style={{
            background: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
          }}
        >
          <Heading>
            🎉 Registration Successful
          </Heading>

          <Text>
            Hello <strong>{name}</strong>,
          </Text>

          <Text>
            Thank you for registering for
            <strong> EASTCOSELS 2026.</strong>
          </Text>

          <Text>
            Your Registration ID is:
          </Text>

          <Heading>{registrationId}</Heading>

          <Section style={{ marginTop: "30px" }}>
            <Button
              href={`http://localhost:3000/ticket/${registrationId}`}
              style={{
                backgroundColor: "#15803d",
                color: "#fff",
                padding: "15px 24px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              View My Ticket
            </Button>
          </Section>

          <Text style={{ marginTop: "30px" }}>
            We look forward to welcoming you!
          </Text>

          <Text>
            EASTCOSELS 2026 Organising Committee
          </Text>
        </Container>
      </Body>
    </Html>
  );
}