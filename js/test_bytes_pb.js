/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var SolidityTypes_pb = require('./SolidityTypes_pb.js');
goog.object.extend(proto, SolidityTypes_pb);
goog.exportSymbol('proto.TestBytes', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TestBytes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TestBytes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TestBytes.displayName = 'proto.TestBytes';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TestBytes.prototype.toObject = function(opt_includeInstance) {
  return proto.TestBytes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TestBytes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestBytes.toObject = function(includeInstance, msg) {
  var f, obj = {
    bytes2Field: (f = msg.getBytes2Field()) && SolidityTypes_pb.bytes2.toObject(includeInstance, f),
    bytes10Field: (f = msg.getBytes10Field()) && SolidityTypes_pb.bytes10.toObject(includeInstance, f),
    bytes17Field: (f = msg.getBytes17Field()) && SolidityTypes_pb.bytes17.toObject(includeInstance, f),
    bytes31Field: (f = msg.getBytes31Field()) && SolidityTypes_pb.bytes31.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TestBytes}
 */
proto.TestBytes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestBytes;
  return proto.TestBytes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TestBytes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TestBytes}
 */
proto.TestBytes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new SolidityTypes_pb.bytes2;
      reader.readMessage(value,SolidityTypes_pb.bytes2.deserializeBinaryFromReader);
      msg.setBytes2Field(value);
      break;
    case 2:
      var value = new SolidityTypes_pb.bytes10;
      reader.readMessage(value,SolidityTypes_pb.bytes10.deserializeBinaryFromReader);
      msg.setBytes10Field(value);
      break;
    case 3:
      var value = new SolidityTypes_pb.bytes17;
      reader.readMessage(value,SolidityTypes_pb.bytes17.deserializeBinaryFromReader);
      msg.setBytes17Field(value);
      break;
    case 4:
      var value = new SolidityTypes_pb.bytes31;
      reader.readMessage(value,SolidityTypes_pb.bytes31.deserializeBinaryFromReader);
      msg.setBytes31Field(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TestBytes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TestBytes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TestBytes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestBytes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBytes2Field();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      SolidityTypes_pb.bytes2.serializeBinaryToWriter
    );
  }
  f = message.getBytes10Field();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      SolidityTypes_pb.bytes10.serializeBinaryToWriter
    );
  }
  f = message.getBytes17Field();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      SolidityTypes_pb.bytes17.serializeBinaryToWriter
    );
  }
  f = message.getBytes31Field();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      SolidityTypes_pb.bytes31.serializeBinaryToWriter
    );
  }
};


/**
 * optional solidity.bytes2 bytes2_field = 1;
 * @return {?proto.solidity.bytes2}
 */
proto.TestBytes.prototype.getBytes2Field = function() {
  return /** @type{?proto.solidity.bytes2} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.bytes2, 1));
};


/** @param {?proto.solidity.bytes2|undefined} value */
proto.TestBytes.prototype.setBytes2Field = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.TestBytes.prototype.clearBytes2Field = function() {
  this.setBytes2Field(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TestBytes.prototype.hasBytes2Field = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional solidity.bytes10 bytes10_field = 2;
 * @return {?proto.solidity.bytes10}
 */
proto.TestBytes.prototype.getBytes10Field = function() {
  return /** @type{?proto.solidity.bytes10} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.bytes10, 2));
};


/** @param {?proto.solidity.bytes10|undefined} value */
proto.TestBytes.prototype.setBytes10Field = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.TestBytes.prototype.clearBytes10Field = function() {
  this.setBytes10Field(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TestBytes.prototype.hasBytes10Field = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional solidity.bytes17 bytes17_field = 3;
 * @return {?proto.solidity.bytes17}
 */
proto.TestBytes.prototype.getBytes17Field = function() {
  return /** @type{?proto.solidity.bytes17} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.bytes17, 3));
};


/** @param {?proto.solidity.bytes17|undefined} value */
proto.TestBytes.prototype.setBytes17Field = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.TestBytes.prototype.clearBytes17Field = function() {
  this.setBytes17Field(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TestBytes.prototype.hasBytes17Field = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional solidity.bytes31 bytes31_field = 4;
 * @return {?proto.solidity.bytes31}
 */
proto.TestBytes.prototype.getBytes31Field = function() {
  return /** @type{?proto.solidity.bytes31} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.bytes31, 4));
};


/** @param {?proto.solidity.bytes31|undefined} value */
proto.TestBytes.prototype.setBytes31Field = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.TestBytes.prototype.clearBytes31Field = function() {
  this.setBytes31Field(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TestBytes.prototype.hasBytes31Field = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto);