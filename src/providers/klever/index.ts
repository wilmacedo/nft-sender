const connect = async (): Promise<string> => {
  if (!window.kleverWeb) {
    return 'KleverWeb is not intalled';
  }

  const address = await window.kleverWeb.initialize();

  return address;
};

export { connect };
