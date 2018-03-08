
//ScriptCraft로 채워진 구를 만드는 기본 코드
exports.mysphere = function sphere(material, radius) {
  for (var i = 0; i <= radius; i++) {
    up(radius + i).fwd(radius - Math.round(Math.sqrt(radius*radius - i*i))).right(radius - Math.round(Math.sqrt(radius*radius - i*i))).cylinder(material, Math.round(Math.sqrt(radius*radius - i*i)), 1);
    up(radius - i).fwd(radius - Math.round(Math.sqrt(radius*radius - i*i))).right(radius - Math.round(Math.sqrt(radius*radius - i*i))).cylinder(material, Math.round(Math.sqrt(radius*radius - i*i)), 1);
  }
}
