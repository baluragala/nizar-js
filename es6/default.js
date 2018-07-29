function makeName(first, last, title = "mr") {
  return `${title}.${first},${last}`;
}

function makeName({ first, last, title = "mr" }) {
  return `${title}.${first},${last}`;
}

makeName({ title: "mrs", first: "bala", last: "ragala" });
