class LoggerObserver {
  update(item) {
    console.log(`Novo item adicionado: ${item.info()}`);
  }
}

export default LoggerObserver;