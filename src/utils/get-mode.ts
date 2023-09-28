enum Modes {
  Verbose = '--verbose',
  Brief = '--brief'
}

const getMode = (verbose?: boolean, brief?: boolean) => {
  const selectedMode = verbose
    ? Modes.Verbose
    : brief
    ? Modes.Brief
    : Modes.Verbose

  return selectedMode
}

export { getMode }
