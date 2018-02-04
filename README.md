# Epicodus-JS-Age-Calculator

#### _Space Age Calculator Application, November 17, 2017_


#### By _**Valia Dempsey**_



## Description

_This is an application which converts user's age to age on other planet, as well as predicts remaining years on each planet._


## Setup/Installation Requirements

  ### Required:
    - Node and Bower are installed on your machine globally
    - Basic knowledge of ES6 vocabulary and syntax

  ### Installation Setup:
    1. Clone project from GitHub repository, by copying and pasting the url of this GitHub repository following the $git clone command into your favorite command line program, such as Terminal on Mac.  
        - For example, $git clone https://github.com/vdempsey/Epicodus-JS-Age-Calc.git

    2. In the command line run the following commands at the root level of your cloned repository folder:
        - $npm install
        - $bower install
        - $gulp build
        - $gulp watch (to preview live server updates)

    3. Run tests

    4. If needed, ready for production by running command $gulp build --production


## Specifications


| Description        | Input           | Output  |
| ------------- |:-------------:| -----:|
| Take user's name in years and convert to seconds      | 3 | 94608000 |
| Take user's entry for birthday (mm, dd, yyyy) and return the result in seconds based on the current day and time (for test purposes using 10 21 2017)    |  10 21 2016 |  31536000 |
| Take user's age in years on Earth and convert them to years on Mercury | 2     |    8.33 |
| Take user's age in years on Earth and convert them to years on Venus | 2     |    3.23 |
| Take user's age in years on Earth and convert them to years on Mars | 2     |    1.06 |
| Take user's age in years on Earth and convert them to years on Mercury | 2     |   0.17 |
| Take user's age in years on Earth and predict remaining years on Earth based on answered questions | 10, question one "yes", question two "yes"     |    80 |
| Take user's age in years on Earth and predict remaining years on Mercury based on answered questions | 10, question one "yes", question two "yes"     |    333.33 |
| Take user's age in years on Earth and predict remaining years on Venus based on answered questions | 10, question one "yes", question two "yes"     |    129.03 |
| Take user's age in years on Earth and predict remaining years on Mars based on answered questions | 10, question one "yes", question two "yes"     |    42.55 |
| Take user's age in years on Earth and predict remaining years on Jupiter based on answered questions | 10, question one "yes", question two "yes"     |    6.75 |
| If user's age > average life expectancy (100 on earth), for earth user get's calc of difference. Answers don't make a difference | 120, question one "yes", question two "yes"     |  20 |
| If user's age > average life expectancy (100/0.24 on Mercury), for Mercury user get's calc of difference. Answers don't make a difference | 120, question one "yes", question two "yes"     |  83.33 |
| If user's age > average life expectancy (100/0.62 on Venus), for Venus user get's calc of difference. Answers don't make a difference | 120, question one "yes", question two "yes"     |  32.26 |
| If user's age > average life expectancy (100/1.88 on Mars), for Mars user get's calc of difference. Answers don't make a difference | 120, question one "yes", question two "yes"     |  10.64 |
| If user's age > average life expectancy (100/11.86 on Jupiter), for Jupiter user get's calc of difference. Answers don't make a difference | 120, question one "yes", question two "yes"     |  1.69  |

_when calculating remaining years, the user answers two questions. If the user chose "no" for Muffin man question, he/she gets extra 10 earth years to live so he/she can meet him. "yes" makes no difference for question one. If the user chose "yes" for suit question, he/she looses 10 earth years due to risk._

## Known Bugs

_If working on mac with Sierra OS, gulp watch is not working properly. Based on my research, the problem seems to be with the operating system itself._


## Support and contact details

_Please feel free to reach out with any questions, etc. to valiadempsey@gmail.com._


## Technologies Used

* ES6 (JavaScript)
* Node.js, including:
  - Jasmine testing
  - Karma test runner
  - Bower
  - Gulp
* jQuery
* Bootstrap (CSS, JavaScript)
* HTML, CSS


### License

*Developed under the MIT license.*

Copyright (c) 2017 **_Valia Dempsey_**
