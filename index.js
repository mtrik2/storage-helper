/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[0];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

////////////////////////////////////////////////////////////////////////////////

const GetNewFactHandler2 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'UnityIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[1];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

////////////////////////////////////////////////////////////////////////////////

const GetNewFactHandler3 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'UnityXTMaxCapacityIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[2];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

////////////////////////////////////////////////////////////////////////////////

const GetNewFactHandler4 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'SCSeriesMaxCapacityIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[3];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

////////////////////////////////////////////////////////////////////////////////

const GetNewFactHandler5 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'PowermaxMaxCapacityIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[4];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

//////////////////////////////////////////////
const GetNewFactHandler6 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'PowermaxEnginesIntent'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[5]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////
const GetNewFactHandler7 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'VxRailPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[6]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
///////////////////////////////
/////////////////////////////////////////
const GetNewFactHandler8 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'VxFlexPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[7]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
///////////////////////////////
/////////////////////////////////////////
const GetNewFactHandler9 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'VxRackPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[8]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
///////////////////////////////
/////////////////////////////////////////
const GetNewFactHandler10 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'IsilonPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[9]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
///////////////////////////////
/////////////////////////////////////////
const GetNewFactHandler11 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'VPlexPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[10]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////
/////////////////////////////////////////
const GetNewFactHandler12 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'UnityPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[11]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////
/////////////////////////////////////////
const GetNewFactHandler13 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'xtremioPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[12]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////

/////////////////////////////////////////
const GetNewFactHandler14 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'powermaxPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[13]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////

/////////////////////////////////////////
const GetNewFactHandler15 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'ecsPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[14]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////

/////////////////////////////////////////
const GetNewFactHandler16 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'XCPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[15]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////

/////////////////////////////////////////
const GetNewFactHandler17 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'MEPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[16]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////

/////////////////////////////////////////
const GetNewFactHandler18 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'IDPAPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[17]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////

/////////////////////////////////////////
const GetNewFactHandler19 = {        // inc by 1
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'DataDomainPitch'); // change
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[18]; // increase by 1
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
/////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const GetNewFactHandler20 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'XtremIOMaxCapacityIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[19];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

////////////////////////////////////////////////////////////////////////////////

const GetNewFactHandler21 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'IsilonMaxCapacityIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[20];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

////////////////////////////////////////////////////////////////////////////////

const GetNewFactHandler22 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'ECSMaxCapacityIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[21];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

////////////////////////////////////////////////////////////////////////////////

const GetNewFactHandler23 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'PowervaultMaxCapacityIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[22];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

////////////////////////////////////////////////////////////////////////////////

const GetNewFactHandler24 = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'VXRailMaxCapacityIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const randomFact = factArr[23];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};
///////////////////////////////////////////////////////////////////////////////



const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'Storage Helper';
const GET_FACT_MESSAGE = ' ';
const HELP_MESSAGE = 'You can ask me to pitch you any Dell EMC Storage Product?';
const HELP_REPROMPT = 'How can I help you ?';
const STOP_MESSAGE = 'Goodbye!';

const data = [

  'Welcome to the Alexa Intern Project',
  'The regular unity comes in 2.4, 4, 8, or 16 petabyte models. The Unity VSA comes in 4, 10, 25, or 50 terabyte models.',
  'The unity XT comes in 2.4, 4, 8, or 16 petabyte models.',
  'The SC Series comes in 1, 2, 4, and 6 petabyte models.',
  'The Powermax 2000 has 1 petabyte effective capacity, and the powermax 8000 has 4 petabyte effective capacity.' ,
  'The powermax can support Up to 8 bricks which are engines with redundant controllers.' ,
  'VxRail is hyperconverged technology that serves as a turnkey solution in customer’s hybrid cloud journey. Faster time to value, a single point of management, scalability, a smaller footprint, and simplified support unique features within VxRail to modernize customer infrastructure while increasing the value technology can drive for the business. Powered by VMware’s v San, the leading HCI software, you can evolve your data center with zero risk and reduce the total cost of ownership. Built upon Dell EMC PowerEdge servers, VxRail will deliver the performance, reliability, and flexibility demanded to thrive across the widest range of workloads. Further, running multiple GPUs, VxRail can support hundreds of concurrent users and graphics intensive apps. Rather than going through the trouble of adding disks and servers with scaling, VxRail requires the simple addition of nodes that can be scaled incrementally with pay as you go. No longer is it necessary to install infrastructure based on expectations for 5 years down the line. VxRail offers reactive management allowing you to scale and manage your IT solution in real time for optimal performance. This third platform converged infrastructure in controlled from a single management point, which decreases the management and time cost required to update and maintain the system. Compared to the frustrating process of support from best-of-breed systems, the simplified support of this hyperconverged solution takes only a single call to get a resolution to any issues. VxRail provides the efficiency and performance to optimize your businesses success in your journey to the hybrid cloud. With HCI growing 64 percent and 2 times based on Dell’s 128% portfolio within the last year, customer’s are choosing the maximum flexibility offered by V x flex as their HCI  solution.' ,
  'V x Flex is a turnkey hyperconverged solution for a in customer’s hybrid cloud journey. Powered by Flex OS,  V x Flex  provides an integrated system with maximum scalability, agility, and simplicity enabling companies to start small and grow big in flexible, discrete increments. This system can handle up to 1.8 times more database orders per minute, run business 87 percent faster, and achieve up to 50 percent lower costs as compared to traditional SAN. Converged compute and storage nodes offer simplified management and increased performance. The flexibility of a two-layered set up, allows for the separation of compute only and storage only nodes, which allows for economically efficient scaling where customers only need to buy what they need. Further, V x Flex can handle any workload, supporting any hypervisor or physical applications. With HCI growing 64 percent and 2 times based on Dell’s 128% growing portfolio within the last year, customers are choosing the maximum flexibility offered by V x flex as their HCI solution.' ,
  'Building upon the HCI appliances of V x Rail and V x Flex, V x Rack extends HCI appliances to include integrated networking.  Networking among nodes is vastly important in HCI solutions as compared to traditional. V x Rack is optimal for customers want to extend the benefits of deployment and support provided by standard HCI solutions by adding networking features. Integrating rack-scale fabric to a HCI appliance only further improves the performance and reliability of the system. ' ,
  'Dell EMC Isilon, which is designed for demanding enterprise file workloads, is the industry’s number one scale-out network-attached storage appliance. Isilon offers the ability to choose between all-flash, hybrid, and archive NAS platforms. Isilon provides users with extreme efficiency, flexibility, data protection, and security. Isilon’s scale-out storage delivers over 80 percent storage utilization as compared to the 50 percent offered by traditional platforms. Smart dedupe data deduplication software enhances storage efficiency to reduce physical storage requirements. Isilon supports all major protocols and data access methods, which means you can support a wide range of applications and workloads on single Isilon platform. Offering N plus one thru N plus 4 redundancy as well as a wide range of security options, Isilon’s variety of efficiency and proven enterprise data backup and recovery options. ',
  'Dell EMC VPlex is a storage virtualization appliance that delivers continuous data availability and mobility ensuring uptime for business-critical applications. VPlex offers an agile infrastructure which makes data and workload mobility seamless across the hybrid cloud. This flexibility allows you to match your infrastructure to your changing business. VPlex has a large cache of 64GB per node which greatly increases I.O. capability. Virtualization storage means you never have to take downtime for a migration again. VPlex allows for seamless migration and cuts the costs, time, and difficulties required for traditional migration by vast amounts. ',
  'Dell EMC Unity delivers unified storage speed and efficiency built for a multi-cloud world. Unity allows instant, high performance copies of any data set for many small-to-medium business applications. Unity leverages data services like inline compression, and thin provisioning, with no impact on production or other copies, to bring maximum performance and reliability. Offered in hybrid and all-flash, unity offers unmatched simplicity, cloud management, all-inclusive software, tiering to cloud, scalable file system, software defined storage, deployment flexibility, application integration, and enterprise solution ready.  ',
  'XtremIO is trusted by 65 percent of fortune 100 companies to provide storage architecture with many transformational benefits. XtremIO allows customers to innovate with advanced flash technologies. As necessary in today’s mobile economy, the advanced flash technology provided by XtremIO delivers consistent and predictable sub-micro second response times for workloads of every volume, including nested copies. By evenly distributing data across all resources for flash performance, XtremIO doesn’t degrade at higher utilization. XtremIO allows effective capacities that are more than 6x the usable capacity of the system. Integrating copy data management, XtremIO boosts agility by delivering improved speed and performance. Automated and consolidated self-service workflows simplify management and lower admin time allowing for more time innovating. ',
  'The PowerMax is built with end-to end NVMe, real-time machine learning and up to 10 million IOPS, enabling it to handle all of the most important and critical workloads. With the third platform fast approaching, modern applications are requiring new levels of performance and security. The PowerMax helps organizations overcome the key limiting factor in modernizing their data analytics: the underlying storage platform. By reaching much higher standards of performance, the PowerMax helps to bridge the gap from underlying storage platforms and the demanding applications that run on it. This can help organizations move legacy and next generation applications closer to real-time and run more complex algorithms over larger data sets. ',

  'With the ECS, an industry leading object storage platform, you can store and manage unstructured data using a product that was designed to manage next generation and traditional workloads.  Take advantage of the public cloud environment and benefit from scalability, flexibility, and enhanced security. The ECS allows you to choose the perfect consumption model for your company, whether it be software defined, as a turnkey appliance, or as service provided by EMC. Let the ECS accommodate to your company’s size and needs, managing unstructured data at any scale, for any length of time, in any way you want. ',
  'With the XC series of hyperconverged infrastructure solutions, companies can eliminate the need for over-provisioning and inflating capital expenditures due to unanticipated capacity changes. By adding one node at a time, customers can easily scale-out their expansion with zero downtime. The XC series come equipped with fault-tolerant architecture and self-healing capabilities that provide system reliability to help ensure data integrity. The XC series is rapidly deployed, reduce the time of system restoration, provides enterprise class hardware security, and reduces the time it takes to perform routine management tasks. The XC series systems can be deployed quickly to handle any virtual workload, let it drive your performance into the digital age. ',

   'The M E 4 Series is a block storage array is designed and optimized for price sensitive SAN and DAS environments.  It is very affordable, simple, and fast. Some key advantages of the M E 4 Series are that they are very affordable and very simple to use, making them well suited as an entry-level block storage solution that can be installed in 15 minutes.  These flexible arrays that can be configured to run application workloads over Fibre Channel, iSCSI, or SAS protocol configurations with five nine’s of availability, up to 320 thousand of IOPs, and active to active controllers.   ',

  'IDPA is an Integrated, turnkey solution that simplifies deployment and reduces the complexity of managing multiple data silos, point solutions, and vendor relationships. It delivers powerful, enterprise-data protection capabilities for mid-size and enterprise organizations at a lower cost-to-protect than competing solutions. IDPA can be characterized as all-in-one, converged storage solution including complete backup, replication, recovery, deduplication, instant access and restore, search and analytics, and tight VMware Integration. Plus, the IDPA comes prepared for cloud readiness with disaster recovery and long-term retention to the cloud. Its scalability allows it to fit the needs of any enterprise and can protect up to 150 petabytes of data regardless of what kind of cloud it is on. The IDPA’s orchestration software is end-to-end, let IDPA help to transform your business. ',
  'Data Domain delivers the most trusted protection storage in the industry. Its unmatched efficiency in deduplication, scalability, reliability, and performance, is a perfect example of Dell EMC’s capabilities as a market leader in the protection storage market. Data Domain is a flexible storage protection solution with the ability to backup directly from primary storage and enterprise apps. Data Domain is cloud enabled, with native tiering of deduped data to public, private or hybrid clouds for long-term retention and secure multi-tenancy capabilities. Any service provider or enterprise can utilize Data Domain to deliver a secure in a private or public cloud. ',

  'The Extreme IO has a maximum usesable capacity of 24.2, 58.1, 116.1, and 232.2 terabytes.',
  'The Isilon has a maximum capacity per chassis of 924, 800, 480, and 144 terabytes.',
  'The ECS has a maximum rack capacity of 192, 384, 768, 1536, and 8640 terabytes.',
  'The Powervault has a maximum capacity of 3, 3.1, and 4 petabytes, and can be expanded by utilizing ME4 Expansion Enclosures.',
  'The VX Rail hybrid storage option has a maximum capacity of 12, 19.2, and 48 terabytes. The VX Rail all flash storage option has a max capacity of 19.2, 30.7, and 76.8 terabytes.'


  // add to data
];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    //add new handlers
    GetNewFactHandler,
    GetNewFactHandler2,
    GetNewFactHandler3,
    GetNewFactHandler4,
    GetNewFactHandler5,
    GetNewFactHandler6,
    GetNewFactHandler7,
     GetNewFactHandler8,
      GetNewFactHandler9,

    GetNewFactHandler10,
    GetNewFactHandler11,
    GetNewFactHandler12,
    GetNewFactHandler13,
    GetNewFactHandler14,


    GetNewFactHandler15,
    GetNewFactHandler16,
    GetNewFactHandler17,
    GetNewFactHandler18,
    GetNewFactHandler19,

    GetNewFactHandler20,
    GetNewFactHandler21,
    GetNewFactHandler22,
    GetNewFactHandler23,
    GetNewFactHandler24,

    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
