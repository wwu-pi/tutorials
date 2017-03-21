---
layout: recipe
title: JMS
---

This tutorial describes how to configure your systems to use them within a Message Oriented Middleware scenario that uses ActiveMQ as a JMS provider. With the following steps, it is possible to implement Java EE applications which communicate via JMS topics and/or queues. They can subscribe to topics, receive and send messages.

### Configure Wildfly
To enable JMS in your WildFly server, the configuration file ``<path-to-wildfly>/standalone/configuration/standalone.xml`` has to be modified. Changes can be found in the <a class="download" href="standalone.diff">diff file</a>. Add the lines that are marked with '+' at the beginning of the line to your configuration file.

To provide a queue within the WildFly you can either specify them within the configuration file of the server, or by providing a file ``META-INF/config-jms.xml`` within your EJB project. We recommend using the latter method, as it is easier to handle within the group (see also <a href="https://github.com/wwu-pi/acse-statistics-with-mom">JMS Example</a>).

To provide a topic 'StatisticsTopic', the file should contain the following:
```xml
<?xml version="1.0" encoding="UTF-8"?>
	<messaging-deployment xmlns="urn:jboss:messaging-activemq-deployment:1.0">
		<server name="jmsserver">
			<jms-destinations>
				<jms-topic name="StatisticsTopic">
					<entry name="topic/StatisticsTopic" />
				</jms-topic>
			</jms-destinations>
		</server>
	</messaging-deployment>
```
