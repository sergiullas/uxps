export const recruiterEssentials = {
  title: "Recruiter essentials",
  description: "Common EEO, work authorization, and clearance answers.",
  sections: [
    {
      id: "contact",
      label: "Contact information",
      icon: "ContactMail",
      fields: [
        { id: "email", label: "Email", icon: "Email", value: "santezana@nayas.com" },
        { id: "phone", label: "Phone", icon: "Phone", value: "571-482-8257" }
      ]
    },
    {
      id: "location",
      label: "Location",
      icon: "LocationOn",
      fields: [{ id: "region", value: "DC Area" }]
    },
    {
      id: "timezone",
      label: "Time zone",
      icon: "AccessTime",
      fields: [
        { id: "current", value: "09:05 PM EST" },
        { id: "note", value: "Same time — Eastern Time (ET)" }
      ]
    },
    {
      id: "citizenship",
      label: "Citizenship / work authorization",
      icon: "VerifiedUser",
      fields: [{ id: "status", value: "US Citizen" }]
    },
    {
      id: "veteran",
      label: "Protected veteran status",
      icon: "MilitaryTech",
      fields: [{ id: "status", value: "Not a veteran" }]
    },
    {
      id: "ethnicity",
      label: "Race / ethnicity",
      icon: "Group",
      fields: [{ id: "ethnicity", value: "Hispanic / Latino" }]
    },
    {
      id: "clearance",
      label: "US clearance",
      icon: "Security",
      fields: [{ id: "level", value: "Top Secret · SCI Eligibility" }]
    },
    {
      id: "pronouns",
      label: "Gender / pronouns",
      icon: "Wc",
      fields: [{ id: "value", value: "he / him" }]
    }
  ]
};
