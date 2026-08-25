import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

type Props = {
  attendee: any;
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
  },

  header: {
    backgroundColor: "#15803d",
    padding: 20,
    marginBottom: 25,
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  subtitle: {
    color: "white",
    marginTop: 6,
    fontSize: 12,
  },

  section: {
    marginBottom: 14,
  },

  label: {
    fontSize: 10,
    color: "#666",
  },

  value: {
    fontSize: 15,
    marginTop: 2,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 35,
    borderTop: "1 solid #ccc",
    paddingTop: 15,
    textAlign: "center",
    fontSize: 10,
    color: "#777",
  },
});

export default function TicketPDF({ attendee }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Text style={styles.title}>
            EASTCOSELS 2026
          </Text>

          <Text style={styles.subtitle}>
            International Conference Ticket
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>FULL NAME</Text>
          <Text style={styles.value}>
            {attendee.full_name}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>REGISTRATION ID</Text>
          <Text style={styles.value}>
            {attendee.registration_id}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>INSTITUTION</Text>
          <Text style={styles.value}>
            {attendee.institution}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>CATEGORY</Text>
          <Text style={styles.value}>
            {attendee.registration_category}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>PAYMENT STATUS</Text>
          <Text style={styles.value}>
            {attendee.payment_status}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>VENUE</Text>
          <Text style={styles.value}>
            University of Nigeria, Nsukka
          </Text>
        </View>

        <View style={styles.footer}>
          <Text>
            Present this ticket during conference check-in.
          </Text>
        </View>

      </Page>
    </Document>
  );
}