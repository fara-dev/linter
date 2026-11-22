
console.log("PaaS Security Demo started.");

const secretNames = [
  "AWS_KEY",
  "DB_PASS",
  "API_TOKEN"
];

console.log("Checking demo secret availability:");

for (const name of secretNames) {
  const available = Boolean(process.env[name]);

  console.log(
    `${name}: ${available ? "AVAILABLE (value hidden)" : "NOT AVAILABLE"}`
  );
}

console.log("No secret values were displayed or transmitted.");
