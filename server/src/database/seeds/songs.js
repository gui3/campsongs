/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('songs').del()
  await knex('songs').insert([
    {songName: 'Jolene', author: "Dolly Parton", text: `
{t:Jolene}
{st:Dolly Parton}

Capo 4

Intro & main riff (*):


{sot}
e|-------------------------------------|
B|---------0-----0h1-----0-----1p0-----|
G|-----2-----------------------------0-|
D|--------2------0h2-------0-------0---|
A|--0---------0-------0--------0-------|
E|-------------------------------------|
{eot}

Chorus:
[Am]Jolene, Jo[C]lene, Jo[G]lene, Jo[Am]lene
G Am(*)
I'm begging of you please don?t take my man
Jo[Am]lene, Jo[C]lene, Jo[G]lene, Jo[Am]lene
G Am(*)
Please don't take him just because you can

Verse 1:
Your [Am]beauty is be[C]yond compare
With [G]flaming locks of [Am]auburn hair
G Am(*)
With ivory skin and eyes of emerald green
Your [Am]smile is like a [C]breath of spring
Your [G]voice is soft like [Am]summer rain
G Am(*)
And I cannot compete with you, Jolene

Verse 2:
He t[Am]alks about you [C]in his sleep
There?s [G]nothing I can [Am]do to keep
G Am(*)
From crying when he calls your name, Jolene
And [Am]I can easily [C]understand
How [G]you could easily [Am]take my man
G Am(*)
But you don't know what he means to me, Jolene


Chorus:
Jo[Am]lene, Jo[C]lene, Jo[G]lene, Jo[Am]lene
G Am(*)
I?m begging of you please don?t take my man
Jo[Am]lene, Jo[C]lene, Jo[G]lene, Jo[Am]lene
G Am(*)
Please don't take him just because you can

Verse 3:
[Am]You could have your [C]choice of men
But [G]I could never [Am]love again
G Am(*)
He's the only one for me, Jolene
I [Am]had to have this [C]talk with you
My [G]happiness de[Am]pends on you
G Am(*)
And whatever you decide to do, Jolene

Chorus:
[Am]Jolene, Jo[C]lene, Jo[G]lene, Jo[Am]lene
G Am(*)
I'm begging of you please don?t take my man
Jo[Am]lene, Jo[C]lene, Jo[G]lene, Jo[Am]lene
G Am(*)
Please don't take him just because you can

Jolene (repeat over main riff to fade)
`},
    {songName: 'Everybody Hurst', author: "R.E.M", text: `
{t:Everybody Hurts}
{st:R.E.M.}

[G] [D] [G] [D] 

When the day is long[G] and the night, [D] the night is yours alone[G][D]
When you're sure you've had eno[G]ugh of this life, [D] well hang on[G]


{sot}
E(low)---3---2---0--
{eot}

[Em]Don't let yourself go, [A] [Em] everybody cries[A][Em]
and everybody hurts[A] sometimes[D][G][D][G]

Sometimes everything is wro[D]ng, [G] now it's time to sing al[D]ong
When your day is night alone [G] (hold on,[D] hold on)
If you feel like letting go [G] (hold on)[D]
When you think you've had too [G]much of this life, [D] well hang on[G]


{sot}
E(low)---3---2---0--
{eot}

[Em] Everybody hurts, [A] [Em] take comfort in your friends[A][Em]
Everybody hurts,[A]

Bridge:
[F#] Don't throw your hand,[Bm] [F#]oh n[Bm]o, [F#] don't throw your hand[Bm]
[C] when you feel like you're alone, [G] [C]no, no, no, you are not alone[Am]

[D] If you're on your own [G] in this life, [D] the days and nights are long[G]
[D] When you think you've had too[G] much, of this life, [D] to hang on[G]


{sot}
E(low)---3---2---0--
{eot}

[Em] Well everybody hurts, [A] somet[Em]imes
Everybody cries, [A] [Em] everybody hurts, [A] someti[D]mes[G]
But everybody hurts [D] somet[G]imes so ho[D/A]ld on, hol[G]d on, hol[D]d on,
Hold on,[G] hold on,[D] hold on,[G] hold on,[D] hold on,[G]
Everybody [D]hurts[G][D][G]
[D]You are not alone[G][D][G][D][G]

Picking patten for the chords:
[D] [G] 

{sot}
E----------2-----------2-------------3-----------3----------------------------
B--------3---3-------3---3---------3---3-------3---3--------------------------
G------2-------2---2-------2-----0-------0---0--------------------------------
D----0-----------0------------------------------------------------------------
A-----------------------------------------------------------------------------
E------------------------------3-----------3----------------------------------
{eot}

(Note: the chords below may be picked or strummed)
[A] [E] 
{sot}
E----------0-----------0-------------0-----------0----------------------------
B--------2---2-------2---2---------0---0-------0---0--------------------------
G------2-------2---2-------2-----1-------1---1--------------------------------
D----2-----------2------------------------------------------------------------
A------------------------------2-----------2----------------------------------
E--------------------------------------------------
{eot}
`},
    {songName: 'Zombie', author: "The Cranberries", text: `
{t:Zombie}
{st:The Cranberries}

Intro:

{sot}
e -----------------------------------------------------------------------|
B -----------------------------------------------------------------------|
G -----------------------------------------------------------------------|
D -2-2-2-2-2-2-2-2-|-2-2-2-2-2-2-2-2-|-0-0-0-0-0-0-0-0-|-0-0-0-0-0-0-0-0-|
A -2-2-2-2-2-2-2-2-|-3-3-3-3-3-3-3-3-|-2-2-2-2-2-2-2-2-|-0-0-0-0-0-0-0-0-|
E -0-0-0-0-0-0-0-0-|-x-x-x-x-x-x-x-x-|-3-3-3-3-3-3-3-3-|-1-1-1-1-1-1-1-1-|
{eot}

Verse:

[Em]Another h[C]ead hangs lowly [G]child is slowly t[F#m]aken
[Em]And the violence [C]caused such silence [G]who are we mista[F#m]ken
But you [Em]see it's not me, it's not [C]my family,
In your [G]head, in your head, they are fig[F#m]hting
With their [Em]tanks and their [C]bombs in your [G]head, in your head, the are c[F#m]rying.

Chorus:

In your [Em]head, in your [C]head, zombie,[G] zombie, zombi[F#m]e
What's in your [Em]head, in your [C]head, zombie,[G] zombie, zombi[F#m]e

Verse:

[Em]Anothers m[C]other's breaking, h[G]eart is taking [F#m]over.
[Em]When the violence [C]caused silence, [G]we must be mis[F#m]taken.
It's the [Em]same old theme since [C]1916,
in your [G]head, in your head, they're still f[F#m]ighting
With their [Em]tanks and their bombs en' their [C]guns,
In your [G]head, in your head, they're d[F#m]ying.

Chorus:
In your [Em]head, in your [C]head, zombie,[G] zombie, zombi[F#m]e
What's in your [Em]head, in your [C]head, zombie,[G] zombie, zombi[F#m]e

Em C G F#m (repeat till the end)
`}
  ]);
};
