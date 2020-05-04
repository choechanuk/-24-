const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const welcomeChannelName = "ㅎㅇ";
const byeChannelName = "ㅂㅇ";
const welcomeChannelComment = "이잉~기묘륑";
const byeChannelComment = "나가!!!!!!!!!!!!!";

client.on('ready', () => {
  console.log('online');
  client.user.setPresence({ game: { name: '!help를 입력하세요.' }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }
  if(message.content == "!명령어"){
    return message.channel.send("ㅋㅋ,이잉,딱대,지건,**아(이름)");
}

  if(message.content == "준비됐어 지?"){
    return message.channel.send("물론이지. 환 (괴물쥐 on)");
}

  if(message.content == "쓰흡"){
    return message.channel.send("치이이이이이익");
}

  if(message.content == "ㅋㅋ"){
    return message.channel.send("루빵삥뽕");
}

  if(message.content == "이잉"){
    return message.channel.send("기뮤뤼잉~");
}

  if(message.content == "딱대"){
    return message.channel.send("시발");
  } 

  if(message.content =="지건"){
    return message.channel.send("딱대 시발!");
  }

  if(message.content == "세환아"){
    return message.channel.send("공무원 시험 합격은 에듀윌");
  }

  if(message.content == "지훈아"){
    return message.channel.send("아앙~기분조아~");
  }

  if(message.content == "찬욱아"){
    return message.channel.send('까미 출현 딱대');
  }

  if(message.content == "상훈아"){
    return message.channel.send("에~에~");
  }

  if(message.content == "시원아"){
    return message.channel.send("말대꾸 하지마!!!!!!!!!");
  }

  if(message.content == "도헌아"){
    return message.channel.send("물 마시다 뒤졌냐?");
  }

  if(message.content == "도헌이"){
    return message.channel.send("또 뒤졌네 그만뒤져!!!!!!!!!!!!");
  }

  if(message.content == "강훈아"){
    return message.channel.send("쉐엣~");
  }

  if(message.content == "성민아"){
    return message.channel.send("타다아악!!!!!!!!!");
  }

  if(message.content == "지원아"){
    return message.channel.send("ㄷㅊ그냥  숨도 쉬지마");
  }

  if(message.content == "용은아"){
    return message.channel.send("미안한데");
  }

  if(message.content == "솔지야"){
    return message.channel.send("아진짜?");
  }

  if(message.content == "얼음아"){
    return message.channel.send("난다요");
  }

  if(message.content == "나경아"){
    return message.channel.send("네 이나경 전화 받았습니다");
  }

  if(message.content == "까미야"){
    return message.channel.send("찬욱: 왜불렁~");
  }

  if(message.content == "지환아"){
    return message.channel.send("역겨워 부르지마");
  }

  if(message.content =="지훈"){
    return message.channel.send("넣을게...");
  }

  if(message.content == "호길아"){
    return message.channel.send("이거 맞아?");
  }  

  if(message.content == "범수야"){
    return message.channel.send("느려");
  }

  if(message.content == "리치야"){
    return message.channel.send("야옹~");
  }

  if(message.content == "주언아"){
    return message.channel.send("Not Bad.");
  }
  
  if(message.content == "루이야"){
    return message.channel.send("망! 망!");
  }
  if(message.content == "재훈아"){
    return message.channel.send("뭔데");
  }

  if(message.content == '괴물쥐 프로필') {
    let img = 'https://ww.namu.la/s/2afc61b884339ea4981262dc5c2bc667e2bbf58ab51aa2ddfb5ffedd43b1b1c1b1a7833ee9d5c5fd6c55a48feb82d6939abb353291f76006d7e65e0a35a78a6de3f0a0a0301b247cb4fe0acf900ff122f60dbe1eb4ec95ea90d791ef2f208df37f5779cf3ce0caeb07c5ab7b59df33a4';
    let embed = new Discord.RichEmbed()
      .setTitle('괴물쥐 나무위키')
      .setURL('https://namu.wiki/w/%EA%B4%B4%EB%AC%BC%EC%A5%90')
      .setAuthor('괴물쥐', img, 'https://www.youtube.com/channel/UCDBAVzfX3yZ1hah0FHnOoaA')
      .setThumbnail(img)
      .addBlankField()
      .addField('본명', '장지환')
      .addField('출생', '1995년 12월 24일(24세)\n대전광역시 대덕구 법동', true)
      .addField('국적', '대한민국', true)
      .addField('본관', '인동 장씨', true)
      .addField('신체','174cm/54kg/O형', true)
      .addField('병역','사회 복무 요원 소집 해제',true)
      .addField('유튜브 구독자 수','약52만명',true)
      .addField('유튜브 총 조회수','약167,000,000회',true)
      .addField('LOL닉네임','괴물쥐\n다이아들 죽어',true)
      .addField('주 포지션', '원거리 딜러', true)
      .addField('소속사', 'charon eSports&Entertainment')
      .addField('방송 링크', '\n유튜브:https://www.youtube.com/channel/UCDBAVzfX3yZ1hah0FHnOoaA/about\n트위치:https://www.twitch.tv/tmxk319\n아프키라TV:http://bj.afreecatv.com/tmxk319\n트게더:https://tgd.kr/member/login_page?next=%2F')
      .addBlankField()
      .setTimestamp()
      .setFooter('찬욱이가 만듬', img)

    message.channel.send(embed)
  } else if(message.content == '!help') {
    let helpImg = 'https://i.ytimg.com/vi/4BMWm724im8/hqdefault.jpg';
    let commandList = [
      {name: '!help', desc: 'help'},
      {name: 'ping', desc: '현재 핑 상태'},
      {name: '괴물쥐 프로필', desc: '괴물쥐 소개'},
      {name: '!공지사항', desc: 'dm으로 전체 공지 보내기'},
      {name: '!공지사항2', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
      {name: '!삭제', desc: '텍스트 지움(예:!삭제 1)'},
      {name: '!초대', desc: '해당 채널의 초대 코드 표기'},
      {name: '!초대2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 괴물쥐 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`괴물쥐 BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '!초대2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '!초대') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('!공지사항2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!공지사항2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('공지 of 괴물쥐 BOT')
        .setColor('#186de6')
        .setFooter(`괴물쥐 BOT`)
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!공지사항')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!공지사항'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!삭제')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!삭제 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @찬욱 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);