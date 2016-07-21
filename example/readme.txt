goals:
  1 consume an open source web-based spreadsheet and produce data analysis.
  2 extend JS statistical library to be object-oriented instead of array-oriented
  3 produce reports in a customizeable UI which can be printed into a report document
  4 integrate into an app for Agile planning and project management:
    - Task management
    - Reports: Simple or complex design: simple uses an editor or premade, complex supports a bootstrap, jQuery, or aurelia API
    - Advanced data analysis, forecasting, and visualization
    - Generate prioritized schedules
    - Scheduling Assistant
    - Capacity Planner
    - Risk Analysis
    - Opportunity analysis
    - Performance analysis
    - Prior-vs-post metric analysis
    - Version control integration
    - Qualitative analysis
      - version control commit messages
      - retrospectives
      - performance evaluations
      - integrate with project documentation (1-stop search with filters)
      - employee satisfaction surveys
    - user-defined ticket types
    - user-defined access/rwe control
    - integrate with Agile platforms: Rally, Jira, etc
      - obtain list of all tickets given a sprint
      - obtain list of tickets with certain parameters modified over a certain timeline
      - obtain a list of tickets without tasks added estimated, or updated over the past X days
      - obtain estimates and actuals of tasks going back through time; correlate error with team, sprint, developer, or other parameter;
    - Hipchat / Slack integration (objectifybot newrow mysheet mytab [column 1 value, column 2 value, column 3...])

dependencies:
  1 http://simplestatistics.org/
  2 https://github.com/handsontable
  3 (maybe later) http://babeljs.io/

ref:
https://processwire.com/talk/topic/4147-excel-like-crud-in-pw-using-handsontable/
http://jsfiddle.net/handsoncode/s6t768pq/
https://docs.handsontable.com/pro/1.5.0/tutorial-introduction.html

other:
  -NormalizeKeys();         //given an array of objects, create a list of all observed keys, then give all keys to each object, with a val of null if it wasn't there
                            //so we can make a spreadsheet or SQL table; be sure to preserve a ref to the original, even if it is stringified
  -OrderKeys();             //args = string or array; if string use a query like 'alphabetical'; if array then assume all keys arbitrarily ordered
  -OrderObjects();          //turn a unordered collection of objects into an ordered array;
  -KeylessRegression();     //
  -Likeness();              //two objects are perfectly alike if they have identical properties, regardless of value; Likeness can compare an object to another or one object to the model normal object (eg NormalizeKeys())
  -ImputeValue();           //given an object is unlike the model normal object, how do we treat it? We can drop from regression, impute average, impute linear, or impute custom
