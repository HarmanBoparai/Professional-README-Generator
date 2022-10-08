//  A function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  let licenseOptions={
  MIT :"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  Apache :"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  Boost  :"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  BSD :"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  Eclipse:"[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  Zlib:"[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
  }
 console.log(licenseOptions[license]) 
  return licenseOptions[license]
}


// A function to generate markdown for README
function generateMarkdown({
  title,description,installation,usage,github_name,License,Contribution,tests,email
}) {
  let LicenseBadge=renderLicenseBadge(License)
  return `
  ##Title
  # ${title}
 ##Description
  # ${description}
  ##Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#Contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-Info)

  ##Installation
  # ${installation}
  ##Usage
  # ${usage}
  ##License
  # ${LicenseBadge}
  ##Contribution
  # ${Contribution}
  ##Tests
  # ${tests}
  ##Questions
 # [github username](https://github.com/${github_name})
 # ${email}


`;
}

module.exports = generateMarkdown;
