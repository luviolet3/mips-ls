import { CompletionItem } from "./completion"

export const instructions:CompletionItem[] = [
  {label:"nop", labelDetails:{description:"Null operation"},kind:3,documentation:"machine code is all zeroes"},
  {label:"add", labelDetails:{detail:" $t1,$t2,$t3",description:"Addition with overflow"},kind:3,documentation:"set $t1 to ($t2 plus $t3)"},
  {label:"sub", labelDetails:{detail:" $t1,$t2,$t3",description:"Subtraction with overflow"},kind:3,documentation:"set $t1 to ($t2 minus $t3)"},
  {label:"addi", labelDetails:{detail:" $t1,$t2,-100",description:"Addition immediate with overflow"},kind:3,documentation:"set $t1 to ($t2 plus signed 16-bit immediate)"},
  {label:"addu", labelDetails:{detail:" $t1,$t2,$t3",description:"Addition unsigned without overflow"},kind:3,documentation:"set $t1 to ($t2 plus $t3), no overflow"},
  {label:"subu", labelDetails:{detail:" $t1,$t2,$t3",description:"Subtraction unsigned without overflow"},kind:3,documentation:"set $t1 to ($t2 minus $t3), no overflow"},
  {label:"addiu", labelDetails:{detail:" $t1,$t2,-100",description:"Addition immediate unsigned without overflow"},kind:3,documentation:"set $t1 to ($t2 plus signed 16-bit immediate), no overflow"},
  {label:"mult", labelDetails:{detail:" $t1,$t2",description:"Multiplication"},kind:3,documentation:"Set hi to high-order 32 bits, lo to low-order 32 bits of the product of $t1 and $t2 (use mfhi to access hi, mflo to access lo)"},
  {label:"multu", labelDetails:{detail:" $t1,$t2",description:"Multiplication unsigned"},kind:3,documentation:"Set HI to high-order 32 bits, LO to low-order 32 bits of the product of unsigned $t1 and $t2 (use mfhi to access HI, mflo to access LO)"},
  {label:"mul", labelDetails:{detail:" $t1,$t2,$t3",description:"Multiplication without overflow"},kind:3,documentation:"Set HI to high-order 32 bits, LO and $t1 to low-order 32 bits of the product of $t2 and $t3 (use mfhi to access HI, mflo to access LO)"},
  {label:"madd", labelDetails:{detail:" $t1,$t2",description:"Multiply add"},kind:3,documentation:"Multiply $t1 by $t2 then increment HI by high-order 32 bits of product, increment LO by low-order 32 bits of product (use mfhi to access HI, mflo to access LO)"},
  {label:"maddu", labelDetails:{detail:" $t1,$t2",description:"Multiply add unsigned"},kind:3,documentation:"Multiply $t1 by $t2 then increment HI by high-order 32 bits of product, increment LO by low-order 32 bits of product, unsigned (use mfhi to access HI, mflo to access LO)"},
  {label:"msub", labelDetails:{detail:" $t1,$t2",description:"Multiply subtract"},kind:3,documentation:"Multiply $t1 by $t2 then decrement HI by high-order 32 bits of product, decrement LO by low-order 32 bits of product (use mfhi to access HI, mflo to access LO)"},
  {label:"msubu", labelDetails:{detail:" $t1,$t2",description:"Multiply subtract unsigned"},kind:3,documentation:"Multiply $t1 by $t2 then decrement HI by high-order 32 bits of product, decement LO by low-order 32 bits of product, unsigned (use mfhi to access HI, mflo to access LO)"},
  {label:"div", labelDetails:{detail:" $t1,$t2",description:"Division with overflow"},kind:3,documentation:"Divide $t1 by $t2 then set LO to quotient and HI to remainder (use mfhi to access HI, mflo to access LO)"},
  {label:"divu", labelDetails:{detail:" $t1,$t2",description:"Division unsigned without overflow"},kind:3,documentation:"Divide unsigned $t1 by $t2 then set LO to quotient and HI to remainder (use mfhi to access HI, mflo to access LO)"},
  {label:"mfhi", labelDetails:{detail:" $t1",description:"Move from HI register"},kind:3,documentation:"Set $t1 to contents of HI (see multiply and divide operations)"},
  {label:"mflo", labelDetails:{detail:" $t1",description:"Move from LO register"},kind:3,documentation:"Set $t1 to contents of LO (see multiply and divide operations)"},
  {label:"mthi", labelDetails:{detail:" $t1",description:"Move to HI registerr"},kind:3,documentation:"Set HI to contents of $t1 (see multiply and divide operations)"},
  {label:"mtlo", labelDetails:{detail:" $t1",description:"Move to LO register"},kind:3,documentation:"Set LO to contents of $t1 (see multiply and divide operations)"},
  {label:"and", labelDetails:{detail:" $t1,$t2,$t3",description:"Bitwise AND"},kind:3,documentation:"Set $t1 to bitwise AND of $t2 and $t3"},
  {label:"or", labelDetails:{detail:" $t1,$t2,$t3",description:"Bitwise OR"},kind:3,documentation:"Set $t1 to bitwise OR of $t2 and $t3"},
  {label:"andi", labelDetails:{detail:" $t1,$t2,100",description:"Bitwise AND immediate"},kind:3,documentation:"Set $t1 to bitwise AND of $t2 and zero-extended 16-bit immediate"},
  {label:"ori", labelDetails:{detail:" $t1,$t2,100",description:"Bitwise OR immediate"},kind:3,documentation:"Set $t1 to bitwise OR of $t2 and zero-extended 16-bit immediate"},
  {label:"nor", labelDetails:{detail:" $t1,$t2,$t3",description:"Bitwise NOR"},kind:3,documentation:"Set $t1 to bitwise NOR of $t2 and $t3"},
  {label:"xor", labelDetails:{detail:" $t1,$t2,$t3",description:"Bitwise XOR (exclusive OR)"},kind:3,documentation:"Set $t1 to bitwise XOR of $t2 and $t3"},
  {label:"xori", labelDetails:{detail:" $t1,$t2,100",description:"Bitwise XOR immediate"},kind:3,documentation:"Set $t1 to bitwise XOR of $t2 and zero-extended 16-bit immediate"},
  {label:"sll", labelDetails:{detail:" $t1,$t2,10",description:"Shift left logical"},kind:3,documentation:"Set $t1 to result of shifting $t2 left by number of bits specified by immediate"},
  {label:"sllv", labelDetails:{detail:" $t1,$t2,$t3",description:"Shift left logical variable"},kind:3,documentation:"Set $t1 to result of shifting $t2 left by number of bits specified by value in low-order 5 bits of $t3"},
  {label:"srl", labelDetails:{detail:" $t1,$t2,10",description:"Shift right logical"},kind:3,documentation:"Set $t1 to result of shifting $t2 right by number of bits specified by immediate"},
  {label:"sra", labelDetails:{detail:" $t1,$t2,10",description:"Shift right arithmetic"},kind:3,documentation:"Set $t1 to result of sign-extended shifting $t2 right by number of bits specified by immediate"},
  {label:"srav", labelDetails:{detail:" $t1,$t2,$t3",description:"Shift right arithmetic variable"},kind:3,documentation:"Set $t1 to result of sign-extended shifting $t2 right by number of bits specified by value in low-order 5 bits of $t3"},
  {label:"srlv", labelDetails:{detail:" $t1,$t2,$t3",description:"Shift right logical variable"},kind:3,documentation:"Set $t1 to result of shifting $t2 right by number of bits specified by value in low-order 5 bits of $t3"},
  {label:"lw", labelDetails:{detail:" $t1,-100($t2)",description:"Load word"},kind:3,documentation:"Set $t1 to contents of effective memory word address"},
  {label:"ll", labelDetails:{detail:" $t1,-100($t2)",description:"Load linked"},kind:3,documentation:"Paired with Store Conditional (sc) to perform atomic read-modify-write. Treated as equivalent to Load Word (lw) because MARS does not simulate multiple processors."},
  {label:"lwl", labelDetails:{detail:" $t1,-100($t2)",description:"Load word left"},kind:3,documentation:"Load from 1 to 4 bytes left-justified into $t1, starting with effective memory byte address and continuing through the low-order byte of its word"},
  {label:"lwr", labelDetails:{detail:" $t1,-100($t2)",description:"Load word right"},kind:3,documentation:"Load from 1 to 4 bytes right-justified into $t1, starting with effective memory byte address and continuing through the high-order byte of its word"},
  {label:"sw", labelDetails:{detail:" $t1,-100($t2)",description:"Store word"},kind:3,documentation:"Store contents of $t1 into effective memory wod address"},
  {label:"sc", labelDetails:{detail:" $t1,-100($t2)",description:"Store conditional"},kind:3,documentation:"Paired with Load Linked (ll) to perform atomic read-modify-write. Stores $t1 value into effective address, then sets $t1 to 1 for success. Always succeeds because MARS does not simulate multiple processors."},
  {label:"swl", labelDetails:{detail:" $t1,-100($t2)",description:"Store word left"},kind:3,documentation:"Store high-order 1 to 4 bytes of $t1 into memory, starting with effective byte address and continuing through the low-order byte of its word"},
  {label:"swr", labelDetails:{detail:" $t1,-100($t2)",description:"Store word right"},kind:3,documentation:"Store low-order 1 to 4 bytes of $t1 into memory, starting with high-order byte of word containing effective byte address and continuing through that byte address"},
  {label:"lui", labelDetails:{detail:" $t1,100",description:"Load upper immediate"},kind:3,documentation:"Set high-order 16 bits of $t1 to 16-bit immediate and low-order 16 bits to 0"},
  {label:"beq", labelDetails:{detail:" $t1,$t2,label",description:"Branch if equal"},kind:3,documentation:"Branch to statement at label's address if $t1 and $t2 are equal"},
  {label:"bne", labelDetails:{detail:" $t1,$t2,label",description:"Branch if not equal"},kind:3,documentation:"Branch to statement at label's address if $t1 and $t2 are not equal"},
  {label:"bgez", labelDetails:{detail:" $t1,label",description:"Branch if greater than or equal to zero"},kind:3,documentation:"Branch to statement at label's address if $t1 is greater than or equal to zero"},
  {label:"bgezal", labelDetails:{detail:" $t1,label",description:"Branch if greater then or equal to zero and link"},kind:3,documentation:"If $t1 is greater than or equal to zero, then set $ra to the Program Counter and branch to statement at label's address"},
  {label:"bgtz", labelDetails:{detail:" $t1,label",description:"Branch if greater than zero"},kind:3,documentation:"Branch to statement at label's address if $t1 is greater than zero"},
  {label:"blez", labelDetails:{detail:" $t1,label",description:"Branch if less than or equal to zero"},kind:3,documentation:"Branch to statement at label's address if $t1 is less than or equal to zero"},
  {label:"bltz", labelDetails:{detail:" $t1,label",description:"Branch if less than zero"},kind:3,documentation:"Branch to statement at label's address if $t1 is less than zero"},
  {label:"bltzal", labelDetails:{detail:" $t1,label",description:"Branch if less than zero and link"},kind:3,documentation:"If $t1 is less than or equal to zero, then set $ra to the Program Counter and branch to statement at label's address"},
  {label:"slt", labelDetails:{detail:" $t1,$t2,$t3",description:"Set less than"},kind:3,documentation:"If $t2 is less than $t3, then set $t1 to 1 else set $t1 to 0"},
  {label:"sltu", labelDetails:{detail:" $t1,$t2,$t3",description:"Set less than unsigned"},kind:3,documentation:"If $t2 is less than $t3 using unsigned comparision, then set $t1 to 1 else set $t1 to 0"},
  {label:"slti", labelDetails:{detail:" $t1,$t2,-100",description:"Set less than immediate"},kind:3,documentation:"If $t2 is less than sign-extended 16-bit immediate, then set $t1 to 1 else set $t1 to 0"},
  {label:"sltiu", labelDetails:{detail:" $t1,$t2,-100",description:"Set less than immediate unsigned"},kind:3,documentation:"If $t2 is less than sign-extended 16-bit immediate using unsigned comparison, then set $t1 to 1 else set $t1 to 0"},
  {label:"movn", labelDetails:{detail:" $t1,$t2,$t3",description:"Move conditional not zero"},kind:3,documentation:"Set $t1 to $t2 if $t3 is not zero"},
  {label:"movz", labelDetails:{detail:" $t1,$t2,$t3",description:"Move conditional zero"},kind:3,documentation:"Set $t1 to $t2 if $t3 is zero"},
  {label:"movf", labelDetails:{detail:" $t1,$t2",description:"Move if FP condition flag 0 false"},kind:3,documentation:"Set $t1 to $t2 if FPU (Coprocessor 1) condition flag 0 is false (zero)"},
  {label:"movf", labelDetails:{detail:" $t1,$t2,1",description:"Move if specified FP condition flag false"},kind:3,documentation:"Set $t1 to $t2 if FPU (Coprocessor 1) condition flag specified by the immediate is false (zero)"},
  {label:"movt", labelDetails:{detail:" $t1,$t2",description:"Move if FP condition flag 0 true"},kind:3,documentation:"Set $t1 to $t2 if FPU (Coprocessor 1) condition flag 0 is true (one)"},
  {label:"movt", labelDetails:{detail:" $t1,$t2,1",description:"Move if specfied FP condition flag true"},kind:3,documentation:"Set $t1 to $t2 if FPU (Coprocessor 1) condition flag specified by the immediate is true (one)"},
  {label:"break", labelDetails:{detail:" 100",description:"Break execution with code"},kind:3,documentation:"Terminate program execution with specified exception code"},
  {label:"break", labelDetails:{detail:" ",description:"Break execution"},kind:3,documentation:"Terminate program execution with exception"},
  {label:"syscall", labelDetails:{detail:" ",description:"Issue a system call"},kind:3,documentation:"Execute the system call specified by value in $v0"},
  {label:"j", labelDetails:{detail:" target",description:"Jump unconditionally"},kind:3,documentation:"Jump to statement at target address"},
  {label:"jr", labelDetails:{detail:" $t1",description:"Jump register unconditionally"},kind:3,documentation:"Jump to statement whose address is in $t1"},
  {label:"jal", labelDetails:{detail:" target",description:"Jump and link"},kind:3,documentation:"Set $ra to Program Counter (return address) then jump to statement at target address"},
  {label:"jalr", labelDetails:{detail:" $t1,$t2",description:"Jump and link register"},kind:3,documentation:"Set $t1 to Program Counter (return address) then jump to statement whose address is in $t2"},
  {label:"jalr", labelDetails:{detail:" $t1",description:"Jump and link register"},kind:3,documentation:"Set $ra to Program Counter (return address) then jump to statement whose address is in $t1"},
  {label:"lb", labelDetails:{detail:" $t1,-100($t2)",description:"Load byte"},kind:3,documentation:"Set $t1 to sign-extended 8-bit value from effective memory byte address"},
  {label:"lh", labelDetails:{detail:" $t1,-100($t2)",description:"Load halfword"},kind:3,documentation:"Set $t1 to sign-extended 16-bit value from effective memory halfword address"},
  {label:"lhu", labelDetails:{detail:" $t1,-100($t2)",description:"Load halfword unsigned"},kind:3,documentation:"Set $t1 to zero-extended 16-bit value from effective memory halfword address"},
  {label:"lbu", labelDetails:{detail:" $t1,-100($t2)",description:"Load byte unsigned"},kind:3,documentation:"Set $t1 to zero-extended 8-bit value from effective memory byte address"},
  {label:"sb", labelDetails:{detail:" $t1,-100($t2)",description:"Store byte"},kind:3,documentation:"Store the low-order 8 bits of $t1 into the effective memory byte address"},
  {label:"sh", labelDetails:{detail:" $t1,-100($t2)",description:"Store halfword"},kind:3,documentation:"Store the low-order 16 bits of $t1 into the effective memory halfword address"},
  {label:"clo", labelDetails:{detail:" $t1,$t2",description:"Count number of leading ones"},kind:3,documentation:"Set $t1 to the count of leading one bits in $t2 starting at most significant bit position"},
  {label:"clz", labelDetails:{detail:" $t1,$t2",description:"Count number of leading zeroes"},kind:3,documentation:"Set $t1 to the count of leading zero bits in $t2 starting at most significant bit positio"},
  {label:"mfc0", labelDetails:{detail:" $t1,$8",description:"Move from Coprocessor 0"},kind:3,documentation:"Set $t1 to the value stored in Coprocessor 0 register $8"},
  {label:"mtc0", labelDetails:{detail:" $t1,$8",description:"Move to Coprocessor 0"},kind:3,documentation:"Set Coprocessor 0 register $8 to value stored in $t1"},
  {label:"add.s", labelDetails:{detail:" $f0,$f1,$f3",description:"Floating point addition single precision"},kind:3,documentation:"Set $f0 to single-precision floating point value of $f1 plus $f3"},
  {label:"sub.s", labelDetails:{detail:" $f0,$f1,$f3",description:"Floating point subtraction single precision"},kind:3,documentation:"Set $f0 to single-precision floating point value of $f1 minus $f3"},
  {label:"mul.s", labelDetails:{detail:" $f0,$f1,$f3",description:"Floating point multiplication single precision"},kind:3,documentation:"Set $f0 to single-precision floating point value of $f1 times $f3"},
  {label:"div.s", labelDetails:{detail:" $f0,$f1,$f3",description:"Floating point division single precision"},kind:3,documentation:"Set $f0 to single-precision floating point value of $f1 divided by $f3"},
  {label:"sqrt.s", labelDetails:{detail:" $f0,$f1",description:"Square root single precision"},kind:3,documentation:"Set $f0 to single-precision floating point square root of $f1"},
  {label:"floor.w.s", labelDetails:{detail:" $f0,$f1",description:"Floor single precision to word"},kind:3,documentation:"Set $f0 to 32-bit integer floor of single-precision float in $f1"},
  {label:"ceil.w.s", labelDetails:{detail:" $f0,$f1",description:"Ceiling single precision to word"},kind:3,documentation:"Set $f0 to 32-bit integer ceiling of single-precision float in $f1"},
  {label:"round.w.s", labelDetails:{detail:" $f0,$f1",description:"Round single precision to word"},kind:3,documentation:"Set $f0 to 32-bit integer round of single-precision float in $f1"},
  {label:"trunc.w.s", labelDetails:{detail:" $f0,$f1",description:"Truncate single precision to word"},kind:3,documentation:"Set $f0 to 32-bit integer truncation of single-precision float in $f1"},
  {label:"add.d", labelDetails:{detail:" $f2,$f4,$f6",description:"Floating point addition double precision"},kind:3,documentation:"Set $f2 to double-precision floating point value of $f4 plus $f6"},
  {label:"sub.d", labelDetails:{detail:" $f2,$f4,$f6",description:"Floating point subtraction double precision"},kind:3,documentation:"Set $f2 to double-precision floating point value of $f4 minus $f6"},
  {label:"mul.d", labelDetails:{detail:" $f2,$f4,$f6",description:"Floating point multiplication double precision"},kind:3,documentation:"Set $f2 to double-precision floating point value of $f4 times $f6"},
  {label:"div.d", labelDetails:{detail:" $f2,$f4,$f6",description:"Floating point division double precision"},kind:3,documentation:"Set $f2 to double-precision floating point value of $f4 divided by $f6"},
  {label:"sqrt.d", labelDetails:{detail:" $f2,$f4",description:"Square root double precision"},kind:3,documentation:"Set $f2 to double-precision floating point square root of $f4"},
  {label:"floor.w.d", labelDetails:{detail:" $f1,$f2",description:"Floor double precision to word"},kind:3,documentation:"Set $f1 to 32-bit integer floor of double-precision float in $f2"},
  {label:"ceil.w.d", labelDetails:{detail:" $f1,$f2",description:"Ceiling double precision to word"},kind:3,documentation:"Set $f1 to 32-bit integer ceiling of double-precision float in $f2"},
  {label:"round.w.d", labelDetails:{detail:" $f1,$f2",description:"Round double precision to word"},kind:3,documentation:"Set $f1 to 32-bit integer round of double-precision float in $f2"},
  {label:"trunc.w.d", labelDetails:{detail:" $f1,$f2",description:"Truncate double precision to word"},kind:3,documentation:"Set $f1 to 32-bit integer truncation of double-precision float in $f2"},
  {label:"bc1t", labelDetails:{detail:" label",description:"Branch if FP condition flag 0 true (BC1T, not BCLT)"},kind:3,documentation:"If Coprocessor 1 condition flag 0 is true (one) then branch to statement at label's address"},
  {label:"bc1t", labelDetails:{detail:" 1,label",description:"Branch if specified FP condition flag true (BC1T, not BCLT)"},kind:3,documentation:"If Coprocessor 1 condition flag specified by immediate is true (one) then branch to statement at label's address"},
  {label:"bc1f", labelDetails:{detail:" label",description:"Branch if FP condition flag 0 false (BC1F, not BCLF)"},kind:3,documentation:"If Coprocessor 1 condition flag 0 is false (zero) then branch to statement at label's address"},
  {label:"bc1f", labelDetails:{detail:" 1,label",description:"Branch if specified FP condition flag false (BC1F, not BCLF)"},kind:3,documentation:"If Coprocessor 1 condition flag specified by immediate is false (zero) then branch to statement at label's address"},
  {label:"c.eq.s", labelDetails:{detail:" $f0,$f1",description:"Compare equal single precision"},kind:3,documentation:"If $f0 is equal to $f1, set Coprocessor 1 condition flag 0 true else set it false"},
  {label:"c.eq.s", labelDetails:{detail:" 1,$f0,$f1",description:"Compare equal single precision"},kind:3,documentation:"If $f0 is equal to $f1, set Coprocessor 1 condition flag specied by immediate to true else set it to false"},
  {label:"c.le.s", labelDetails:{detail:" $f0,$f1",description:"Compare less or equal single precision"},kind:3,documentation:"If $f0 is less than or equal to $f1, set Coprocessor 1 condition flag 0 true else set it false"},
  {label:"c.le.s", labelDetails:{detail:" 1,$f0,$f1",description:"Compare less or equal single precision"},kind:3,documentation:"If $f0 is less than or equal to $f1, set Coprocessor 1 condition flag specified by immediate to true else set it to false"},
  {label:"c.lt.s", labelDetails:{detail:" $f0,$f1",description:"Compare less than single precision"},kind:3,documentation:"If $f0 is less than $f1, set Coprocessor 1 condition flag 0 true else set it false"},
  {label:"c.lt.s", labelDetails:{detail:" 1,$f0,$f1",description:"Compare less than single precision"},kind:3,documentation:"If $f0 is less than $f1, set Coprocessor 1 condition flag specified by immediate to true else set it to false"},
  {label:"c.eq.d", labelDetails:{detail:" $f2,$f4",description:"Compare equal double precision"},kind:3,documentation:"If $f2 is equal to $f4 (double-precision), set Coprocessor 1 condition flag 0 true else set it false"},
  {label:"c.eq.d", labelDetails:{detail:" 1,$f2,$f4",description:"Compare equal double precision"},kind:3,documentation:"If $f2 is equal to $f4 (double-precision), set Coprocessor 1 condition flag specified by immediate to true else set it to false"},
  {label:"c.le.d", labelDetails:{detail:" $f2,$f4",description:"Compare less or equal double precision"},kind:3,documentation:"If $f2 is less than or equal to $f4 (double-precision), set Coprocessor 1 condition flag 0 true else set it false"},
  {label:"c.le.d", labelDetails:{detail:" 1,$f2,$f4",description:"Compare less or equal double precision"},kind:3,documentation:"If $f2 is less than or equal to $f4 (double-precision), set Coprocessor 1 condition flag specfied by immediate true else set it false"},
  {label:"c.lt.d", labelDetails:{detail:" $f2,$f4",description:"Compare less than double precision"},kind:3,documentation:"If $f2 is less than $f4 (double-precision), set Coprocessor 1 condition flag 0 true else set it false"},
  {label:"c.lt.d", labelDetails:{detail:" 1,$f2,$f4",description:"Compare less than double precision"},kind:3,documentation:"If $f2 is less than $f4 (double-precision), set Coprocessor 1 condition flag specified by immediate to true else set it to false"},
  {label:"abs.s", labelDetails:{detail:" $f0,$f1",description:"Floating point absolute value single precision"},kind:3,documentation:"Set $f0 to absolute value of $f1, single precision"},
  {label:"abs.d", labelDetails:{detail:" $f2,$f4",description:"Floating point absolute value double precision"},kind:3,documentation:"Set $f2 to absolute value of $f4, double precision"},
  {label:"cvt.d.s", labelDetails:{detail:" $f2,$f1",description:"Convert from single precision to double precision"},kind:3,documentation:"Set $f2 to double precision equivalent of single precision value in $f1"},
  {label:"cvt.d.w", labelDetails:{detail:" $f2,$f1",description:"Convert from word to double precision"},kind:3,documentation:"Set $f2 to double precision equivalent of 32-bit integer value in $f1"},
  {label:"cvt.s.d", labelDetails:{detail:" $f1,$f2",description:"Convert from double precision to single precision"},kind:3,documentation:"Set $f1 to single precision equivalent of double precision value in $f2"},
  {label:"cvt.s.w", labelDetails:{detail:" $f0,$f1",description:"Convert from word to single precision"},kind:3,documentation:"Set $f0 to single precision equivalent of 32-bit integer value in $f2"},
  {label:"cvt.w.d", labelDetails:{detail:" $f1,$f2",description:"Convert from double precision to word"},kind:3,documentation:"Set $f1 to 32-bit integer equivalent of double precision value in $f2"},
  {label:"cvt.w.s", labelDetails:{detail:" $f0,$f1",description:"Convert from single precision to word"},kind:3,documentation:"Set $f0 to 32-bit integer equivalent of single precision value in $f1"},
  {label:"mov.d", labelDetails:{detail:" $f2,$f4",description:"Move floating point double precision"},kind:3,documentation:"Set double precision $f2 to double precision value in $f4"},
  {label:"movf.d", labelDetails:{detail:" $f2,$f4",description:"Move floating point double precision"},kind:3,documentation:"If condition flag 0 false, set double precision $f2 to double precision value in $f4"},
  {label:"movf.d", labelDetails:{detail:" $f2,$f4,1",description:"Move floating point double precision"},kind:3,documentation:"If condition flag specified by immediate is false, set double precision $f2 to double precision value in $f4"},
  {label:"movt.d", labelDetails:{detail:" $f2,$f4",description:"Move floating point double precision"},kind:3,documentation:"If condition flag 0 true, set double precision $f2 to double precision value in $f4"},
  {label:"movt.d", labelDetails:{detail:" $f2,$f4,1",description:"Move floating point double precision"},kind:3,documentation:"If condition flag specified by immediate is true, set double precision $f2 to double precision value in $f4e"},
  {label:"movn.d", labelDetails:{detail:" $f2,$f4,$t3",description:"Move floating point double precision"},kind:3,documentation:"If $t3 is not zero, set double precision $f2 to double precision value in $f4"},
  {label:"movz.d", labelDetails:{detail:" $f2,$f4,$t3",description:"Move floating point double precision"},kind:3,documentation:"If $t3 is zero, set double precision $f2 to double precision value in $f4"},
  {label:"mov.s", labelDetails:{detail:" $f0,$f1",description:"Move floating point single precision"},kind:3,documentation:"Set single precision $f0 to single precision value in $f1"},
  {label:"movf.s", labelDetails:{detail:" $f0,$f1",description:"Move floating point single precision"},kind:3,documentation:"If condition flag 0 is false, set single precision $f0 to single precision value in $f1"},
  {label:"movf.s", labelDetails:{detail:" $f0,$f1,1",description:"Move floating point single precision"},kind:3,documentation:"If condition flag specified by immediate is false, set single precision $f0 to single precision value in $f1e"},
  {label:"movt.s", labelDetails:{detail:" $f0,$f1",description:"Move floating point single precision"},kind:3,documentation:"If condition flag 0 is true, set single precision $f0 to single precision value in $f1e"},
  {label:"movt.s", labelDetails:{detail:" $f0,$f1,1",description:"Move floating point single precision"},kind:3,documentation:"If condition flag specified by immediate is true, set single precision $f0 to single precision value in $f1e"},
  {label:"movn.s", labelDetails:{detail:" $f0,$f1,$t3",description:"Move floating point single precision"},kind:3,documentation:"If $t3 is not zero, set single precision $f0 to single precision value in $f1"},
  {label:"movz.s", labelDetails:{detail:" $f0,$f1,$t3",description:"Move floating point single precision"},kind:3,documentation:"If $t3 is zero, set single precision $f0 to single precision value in $f1"},
  {label:"mfc1", labelDetails:{detail:" $t1,$f1",description:"Move from Coprocessor 1 (FPU)"},kind:3,documentation:"Set $t1 to value in Coprocessor 1 register $f1"},
  {label:"mtc1", labelDetails:{detail:" $t1,$f1",description:"Move to Coprocessor 1 (FPU)"},kind:3,documentation:"Set Coprocessor 1 register $f1 to value in $t1"},
  {label:"neg.d", labelDetails:{detail:" $f2,$f4",description:"Floating point negate double precision"},kind:3,documentation:"Set double precision $f2 to negation of double precision value in $f4"},
  {label:"neg.s", labelDetails:{detail:" $f0,$f1",description:"Floating point negate single precision"},kind:3,documentation:"Set single precision $f0 to negation of single precision value in $f1"},
  {label:"lwc1", labelDetails:{detail:" $f1,-100($t2)",description:"Load word into Coprocessor 1 (FPU)"},kind:3,documentation:"Set $f1 to 32-bit value from effective memory word address"},
  {label:"ldc1", labelDetails:{detail:" $f2,-100($t2)",description:"Load double word Coprocessor 1 (FPU))"},kind:3,documentation:"Set $f2 to 64-bit value from effective memory doubleword address"},
  {label:"swc1", labelDetails:{detail:" $f1,-100($t2)",description:"Store word from Coprocesor 1 (FPU)"},kind:3,documentation:"Store 32 bit value in $f1 to effective memory word address"},
  {label:"sdc1", labelDetails:{detail:" $f2,-100($t2)",description:"Store double word from Coprocessor 1 (FPU))"},kind:3,documentation:"Store 64 bit value in $f2 to effective memory doubleword address"},
  {label:"teq", labelDetails:{detail:" $t1,$t2",description:"Trap if equal"},kind:3,documentation:"Trap if $t1 is equal to $t2"},
  {label:"teqi", labelDetails:{detail:" $t1,-100",description:"Trap if equal to immediate"},kind:3,documentation:"Trap if $t1 is equal to sign-extended 16 bit immediate"},
  {label:"tne", labelDetails:{detail:" $t1,$t2",description:"Trap if not equal"},kind:3,documentation:"Trap if $t1 is not equal to $t2"},
  {label:"tnei", labelDetails:{detail:" $t1,-100",description:"Trap if not equal to immediate"},kind:3,documentation:"Trap if $t1 is not equal to sign-extended 16 bit immediate"},
  {label:"tge", labelDetails:{detail:" $t1,$t2",description:"Trap if greater or equal"},kind:3,documentation:"Trap if $t1 is greater than or equal to $t2"},
  {label:"tgeu", labelDetails:{detail:" $t1,$t2",description:"Trap if greater or equal unsigned"},kind:3,documentation:"Trap if $t1 is greater than or equal to $t2 using unsigned comparision"},
  {label:"tgei", labelDetails:{detail:" $t1,-100",description:"Trap if greater than or equal to immediate"},kind:3,documentation:"Trap if $t1 greater than or equal to sign-extended 16 bit immediate"},
  {label:"tgeiu", labelDetails:{detail:" $t1,-100",description:"Trap if greater or equal to immediate unsigned"},kind:3,documentation:"Trap if $t1 greater than or equal to sign-extended 16 bit immediate, unsigned comparison"},
  {label:"tlt", labelDetails:{detail:" $t1,$t2",description:"Trap if less than"},kind:3,documentation:" Trap if $t1 less than $t2"},
  {label:"tltu", labelDetails:{detail:" $t1,$t2",description:"Trap if less than unsigned"},kind:3,documentation:"Trap if $t1 less than $t2, unsigned comparison"},
  {label:"tlti", labelDetails:{detail:" $t1,-100",description:"Trap if less than immediate"},kind:3,documentation:"Trap if $t1 less than sign-extended 16-bit immediate"},
  {label:"tltiu", labelDetails:{detail:" $t1,-100",description:"Trap if less than immediate unsigned"},kind:3,documentation:"Trap if $t1 less than sign-extended 16-bit immediate, unsigned comparison"},
  {label:"eret", labelDetails:{detail:" ",description:"Exception return"},kind:3,documentation:"Set Program Counter to Coprocessor 0 EPC register value, set Coprocessor Status register bit 1 (exception level) to zero"},
]